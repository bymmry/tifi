# - * -coding: UTF - 8 - * -
import os
from flask import send_from_directory


def play(app):
    @app.route('/upload/music/mp3/<filename>')
    def play_mp3(filename):
        return send_from_directory(os.getcwd(), 'upload/music/mp3/' + filename)
