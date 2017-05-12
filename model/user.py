import time
import datetime


def userInit(db):
    class Artist(db.Document):
        meta = {
            'collection': 'user',
            'strict': False,
        }
        wyID = db.StringField()
        phone = db.IntField()
        name = db.StringField()
        psw = db.StringField(required=True)
        comment = db.StringField()
        picUrl = db.StringField()
        introduction = db.StringField()
        record = db.ListField()
        playlist = db.ListField()
        createTime = db.IntField(
            default=int(time.mktime(datetime.datetime.now().timetuple()))*1000)

    return Artist
