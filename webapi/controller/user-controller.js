// Express
const express = require('express');
const controller = express.Router();
const bodyParser = require('body-parser');

// Middlware
controller.use(bodyParser.json());
controller.use(bodyParser.urlencoded({ extended: true }));

// Helpers
const helpers = require('./helpers');


controller.get('/:id', function (req, res, next) {

    if (req.params) {
        let id = req.params.id;
        console.log(id);
        let user = helpers.getUser(id);
        if (user) {
            res.status(200).send(user);
        } else {
            next(new Error(`${id} Not Found`));
        }
    }
});

module.exports = controller;