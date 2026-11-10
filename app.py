import os
from flask import Flask
from pymongo import MongoClient
from pymongo.errors import ConnectionFailure

app = Flask(__name__)

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/")

client = MongoClient(MONGO_URI, serverSelectionTimeoutMS=5000)
db = client["ma_base_de_donnees"]
collection = db["visiteurs"]
@app.route("/")
def hello_world():
    try:
        client.admin.command("ping")
        return "Hello World! La connexion à MongoDB est réussie."
    except ConnectionFailure as e:
        return "Erreur de connexion à MongoDB." + str(e), 500

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)