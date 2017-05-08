# - * -coding: UTF - 8 - * -
from flask import send_file


def test(app, db):
    @app.route('/test')
    def test_c():
        
        return send_file('testViews/test.html')