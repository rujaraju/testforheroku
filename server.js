'use strict';

var express = require('express'),
    mongo = require('mongodb').MongoClient; // npm install mongodb & the rest of setup for c9

var app = express();

app.set('port', (process.env.PORT || 8080));

mongo.connect('mongodb://localhost:27017/testheroku', function (err, db) {

    if (err) {
        throw new Error('Database failed to connect!');
    } else {
        console.log('MongoDB successfully connected on port 27017.');
    }

    //app.use('/public', express.static(process.cwd() + '/public'));
    //app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

    app.route('/')
        .get(function (req, res) {
            var clicks = db.collection('clicks');
            res.send((clicks !== undefined));
        });

    app.listen(app.get('port'), function () {
        console.log('Listening on port 8080...');
    });

});


