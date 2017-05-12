import time
import datetime


def codeInit(db):
    class Code(db.Document):
        meta = {
            'collection': 'code',
            'strict': False,
        }
        code = db.StringField()
        createTime = db.IntField(
            default=int(time.mktime(datetime.datetime.now().timetuple()))*1000)
    return Code

