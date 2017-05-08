def musicInit(db):
    class Music(db.Document):
        meta = {
            'collection': 'music',
            'strict': False
        }
        wyID = db.IntField()
        name = db.StringField(required=True)
        albumID = db.StringField()
        type = db.StringField()
        url = db.StringField()
        bps = db.StringField()
        size = db.FloatField()
        commentID = db.StringField()
    return Music

