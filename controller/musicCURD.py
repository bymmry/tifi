# - * -coding: UTF - 8 - * -
# lib
from flask.blueprints import Blueprint
from flask import request, jsonify


# model
from model.music import Todo


createMusic = Blueprint('createMusic', __name__) 


@createMusic.route('/createMusic', methods=['POST']) 
def createMusic_control():
    todo1 = Todo(task=request['task'], is_completed=request['is_completed'])
    todo1.save()
    return jsonify({'code': 200, 'data': request})