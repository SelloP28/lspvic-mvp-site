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

@app.route('/', methods=['GET'])
def home():
    return jsonify({'message': 'LSPVIC Forecast API is running. Use POST /forecast with JSON {postcode, panels, last_clean}.'}), 200

@app.route('/forecast', methods=['POST'])
def forecast():
    try:
        data = request.json
        postcode = data['postcode']
        panels = data['panels']
        last_clean = pd.to_datetime(data['last_clean'])

        # Fetch irradiance proxy with error handling
        try:
            irrad_resp = requests.get(f"https://api.openweathermap.org/data/2.5/weather?zip={postcode},ZA&appid={OPENWEATHER_API_KEY}")
            irrad_resp.raise_for_status()  # Raise if not 200 OK
            irrad = irrad_resp.json().get('main', {}).get('temp', 25)
        except requests.RequestException as e:
            return jsonify({'error': f'Weather API error: {str(e)}. Using default temperature.'}), 400
            irrad = 25

        # Simulated historical data
        dates = pd.date_range(start=last_clean - pd.Timedelta(days=30), periods=30)
        efficiency = [100 - i * (0.5 + irrad/100) for i in range(30)]

        df = pd.DataFrame({'ds': dates, 'y': efficiency})

        # Model fitting with error handling
        try:
            model = Prophet()
            model.fit(df)
            future = model.make_future_dataframe(periods=30)
            forecast = model.predict(future)
        except Exception as e:
            return jsonify({'error': f'Model fitting error: {str(e)}'}), 500

        # Plot generation with error handling
        try:
            fig = model.plot(forecast)
            buf = io.BytesIO()
            fig.savefig(buf, format='png')
            buf.seek(0)
            img_base64 = base64.b64encode(buf.read()).decode('utf-8')
        except Exception as e:
            return jsonify({'error': f'Plot generation error: {str(e)}'}), 500

        next_clean_days = 45 if forecast['yhat'].mean() > 85 else 30
        return jsonify({'next_clean': str(dates[-1] + pd.Timedelta(days=next_clean_days)), 'risk': f"{100 - forecast['yhat'].mean():.1f}%", 'chart': img_base64})

    except KeyError as e:
        return jsonify({'error': f'Missing field: {str(e)}'}), 400
    except Exception as e:
        return jsonify({'error': f'Server error: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)