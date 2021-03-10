'use strict';

const Password = require('./password'); 
const Profile = require('./profile');
const Users = require('./users');

module.exports = dependencies => ({
  ...Password({
    ...dependencies,
  }),
  ...Profile({
    ...dependencies
  }),
  ...Users({
    ...dependencies,
  }),
});
