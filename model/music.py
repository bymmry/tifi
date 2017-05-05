from datetime import datetime


def musicInit(db):
    class Todo(db.Document):
        meta = {
            'collection': 'todo',
            'ordering': ['-create_at'],
            'strict': False,
        }
        task = db.StringField(required=True)
        create_at = db.DateTimeField(default=datetime.now)
        is_completed = db.BooleanField(default=False)
    return Todo

