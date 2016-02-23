import logging
import os

from data.query import Query
from charts.sync.repo import GitSync
from motor.motor_tornado import MotorClient
from tornado.gen import coroutine, Return


@coroutine
def initialize():
    logging.info("Initializing charts sync")

    mongo_url = "mongodb://{0}:{1}/".format(
        os.getenv('ELASTICKUBE_MONGO_SERVICE_HOST', 'localhost'),
        os.getenv('ELASTICKUBE_MONGO_SERVICE_PORT', 27017)
    )

    database = MotorClient(mongo_url).elastickube
    settings = yield Query(database, "Settings").find_one()
    settings['database'] = database

    yield GitSync(settings).sync_loop()
