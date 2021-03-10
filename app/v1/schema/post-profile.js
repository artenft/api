'use strict';

module.exports = Joi => Joi.object({
  name: Joi.string().required(),
  bio: Joi.string().required(),
  description: Joi.string().required(),
  picture: Joi.string().allow(''),
});
