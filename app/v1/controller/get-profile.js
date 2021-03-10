'use strict';

module.exports = ({ ObjectId, findProfile, responseHandler }) =>
  (req, res) => findProfile({
    profileId: ObjectId(req.params.profileId),
    ...responseHandler(req, res)
  });
