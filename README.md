# example
An example express server

`npm install`

`npm start`

GET / => Prints config.msg.hi

GET /mongo => Lists mongodb collections in mongodb collection from config.db

GET /redis => Lists keys on redis server from config.cache

Note: Set the port with config.port

**Other Note:** Obviously this app tries to connect to a mongo db and a redis cache so, you know, obviously, have those things running on config.db and config.cache or it will crash on startup.
