
from flask import Flask
from chat import cors,socketio

def create_app():
    app = Flask(__name__)
    register_extensions(app)
    return app


def register_extensions(app):
    cors.init_app(app)
    socketio.init_app(app, cors_allowed_origins="*")





