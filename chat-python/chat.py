from flask_cors import CORS
from flask_socketio import SocketIO, join_room, leave_room, send
from datetime import date, datetime
import time

cors = CORS()
socketio = SocketIO()


ROOMS = ["room1", "room2", "room3", "room4"]




@socketio.on('connect', namespace='/socket')
def on_connect():
    socketio.emit('response', {'data': 'Connected'})


@socketio.on('disconnect', namespace='/socket')
def on_disconnect():
    socketio.emit('response', {'data': 'Disconnected'})


@socketio.on('message', namespace='/socket')
def on_message(message):
    room = message['data_repository_uid']
    response=[]
    # response = DataRepositoryService().add_new_message(message) save to DB
    send({'data': response, 'room': room, 'type': 'message'}, room=room)


@socketio.on('join', namespace='/socket')
def on_join(data_repository_id):
    room = data_repository_id
    join_room(room)
    send({'data': data_repository_id, 'room': room, 'type': 'join'}, room=room)


@socketio.on('leave', namespace='/socket')
def on_leave(data_repository_id):
    room = data_repository_id
    leave_room(room)
    send({'data': data_repository_id, 'room': room, 'type': 'leave'}, room=room)
