# from flask import Flask, request, jsonify, render_template
# import pickle
# import numpy as np

# path = r"D:/test/modelinterval.pkl"
# model = pickle.load(open(path, 'rb'))

# app = Flask(__name__)

# @app.route('/PricePrediction', methods=['POST'])
# def predict_price():
#     try:
#         # Get input data from the POST request
#         data = request.get_json()
#         area = float(data['area'])
#         rooms = int(data['rooms'])
#         bathrooms = int(data['bathrooms'])

#         # Make predictions using the loaded model
#         features = np.array([[area, rooms, bathrooms]])
#         predicted_price = model.predict(features)[0]

#         # Convert the predicted price to a regular Python float
#         # predicted_price = float(predicted_price)

#         # Create a JSON response
#         response = str(predicted_price)
#         return render_template("PricePrediction.js")
#     except Exception as e:
#         return jsonify({'error': str(e)})

# if __name__ == '__main__':
#     app.run(debug=True, port=5000)


from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS

# Load the machine learning model
path = r"D:/test/modelinterval.pkl"
model = pickle.load(open(path, 'rb'))

app = Flask(__name__)
CORS(app)


@app.route('/PricePrediction', methods=['POST'])
def predict_price():
    try:
        # Get input data from the POST request
        data = request.get_json()
        area = float(data['area'])
        rooms = int(data['rooms'])
        bathrooms = int(data['bathrooms'])

        # Make predictions using the loaded model
        features = np.array([[area, rooms, bathrooms]])
        predicted_price = model.predict(features)[0]

        # Convert NumPy float32 to native Python float
        predicted_price = float(predicted_price)

        # Create a JSON response
        response = {'predicted_price': predicted_price}
        return jsonify(response)
    except Exception as e:
        return jsonify({'error': str(e)})


if __name__ == '__main__':
    app.run(debug=True, port=3000)
