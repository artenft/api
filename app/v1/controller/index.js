'use strict';

const createLogin = require('./create-login');
const createProfile = require('./create-profile');
const createUser = require('./create-user');
const listProfiles = require('./get-profiles');
const getProfile = require('./get-profile');
const updateConfirmAccount = require('./update-confirm-account');
const updatePassword = require('./update-password');

module.exports = dependencies => ({
  createLogin: createLogin(dependencies),
  createProfile: createProfile(dependencies),
  createUser: createUser(dependencies),
  listProfiles: listProfiles(dependencies),
  getProfile: getProfile(dependencies),
  updateConfirmAccount: updateConfirmAccount(dependencies),
  updatePassword: updatePassword(dependencies),
});
