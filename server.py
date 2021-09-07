from flask import Flask, request
from flask_cors import CORS
from werkzeug.exceptions import RequestTimeout
import json

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello():
    return "string name"

@app.route('/code', methods=["POST"])
def update_code():
    request_dec = json.loads(request.data.decode("utf-8"))
    code = request_dec['code']
    return code

if __name__ == "__main__":

    app.run(debug=True)


