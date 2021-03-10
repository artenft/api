'use strict';

const Joi = require('@hapi/joi');

const postLogin = require('./post-login');
const postProfile = require('./post-profile');
const resetPassword = require('./post-reset-password');
const postUser = require('./post-users');
const accountConfirmation = require('./get-confirm-account');

module.exports = {
  post: {
    login: postLogin(Joi),
    profile: postProfile(Joi),
    resetPassword: resetPassword(Joi),
    user: postUser(Joi),
  },
  get: {
    accountConfirmation: accountConfirmation(Joi),
  }
};
