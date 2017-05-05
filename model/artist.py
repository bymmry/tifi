def artistInit(db):
    class Artist(db.Document):
        meta = {
            'collection': 'artist',
            'strict': False,
        }
        wyID = db.IntField(required=True)
        name = db.StringField(required=True)
        picUrl = db.StringField()
        introduction = db.DictField()
    return Artist

