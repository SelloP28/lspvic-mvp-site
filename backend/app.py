from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from prophet import Prophet
import matplotlib.pyplot as plt
import io
import base64
import requests

app = Flask(__name__)
CORS(app)

OPENWEATHER_API_KEY = 'your_key_here'  # Replace with free key from openweathermap.org

@app.route('/forecast', methods=['POST'])
def forecast():
    data = request.json
    postcode = data['postcode']
    panels = data['panels']
    last_clean = pd.to_datetime(data['last_clean'])

    # Fetch irradiance proxy (temp as stand-in; upgrade to solar API if needed)
    irrad_resp = requests.get(f"https://api.openweathermap.org/data/2.5/weather?zip={postcode},ZA&appid={OPENWEATHER_API_KEY}")
    irrad = irrad_resp.json().get('main', {}).get('temp', 25) if irrad_resp.ok else 25

    # Simulated historical data
    dates = pd.date_range(start=last_clean - pd.Timedelta(days=30), periods=30)
    efficiency = [100 - i * (0.5 + irrad/100) for i in range(30)]

    df = pd.DataFrame({'ds': dates, 'y': efficiency})
    model = Prophet()
    model.fit(df)
    future = model.make_future_dataframe(periods=30)
    forecast = model.predict(future)

    # Plot
    fig = model.plot(forecast)
    buf = io.BytesIO()
    fig.savefig(buf, format='png')
    buf.seek(0)
    img_base64 = base64.b64encode(buf.read()).decode('utf-8')

    next_clean_days = 45 if forecast['yhat'].mean() > 85 else 30
    return jsonify({'next_clean': str(dates[-1] + pd.Timedelta(days=next_clean_days)), 'risk': f"{100 - forecast['yhat'].mean():.1f}%", 'chart': img_base64})

if __name__ == '__main__':
    app.run(debug=True, port=5000)