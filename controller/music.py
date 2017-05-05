# - * -coding: UTF - 8 - * -
# lib
from flask import jsonify


def createMusic(Music):
    musicSchema = Music(task='task', is_completed=False)
    musicSchema.save()
    return jsonify({'code': 200, 'data': musicSchema})