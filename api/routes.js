'use strict';

module.exports = function(app) {
  const controler = require('./controller');

  app.route('/')
    .get(controler.print_smth);
};