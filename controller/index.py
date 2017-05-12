# - * -coding: UTF - 8 - * -
from flask import send_file


def index(app):
    @app.route('/')
    def index_c():
        return send_file('views/dist/index.html')

    @app.route('/spa/<path>')
    def spa(path):
        return send_file('views/dist/index.html')