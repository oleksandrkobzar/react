'use strict';

const mongoose = require('mongoose');


exports.print_smth = function(req, res) {
    res.json({'hello':'world'});
};

