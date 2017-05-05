# - * -coding: UTF - 8 - * -
from flask import send_file


def index():
    return send_file('views/dist/index.html')