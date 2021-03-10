'use strict';

const Profile = dependencies => {
  const {
    aws,
    logger,
    slugify,
    profileRepository,
  } = dependencies;

  const createProfile = async (request) => {
    const {
      profile,
      onSuccess,
      onError
    } = request;

    try {
      const date = new Date();
      const blob = profile.picture.replace(/^data:image\/jpeg;base64,/, '');

      profile.createdAt = date;
      profile.imageUrl = await aws.upload(`${slugify(profile.name)}-${+date}.jpg`, Buffer.from(blob, 'base64'));

      const { ops: [createdProfile] } = await profileRepository.insertOne(profile);

      return onSuccess(201, createdProfile);
    } catch (err) {
      logger.error(err);
      onError(503, err);
    }
  };

  const listProfile = async request => {
    const { onSuccess, onError } = request;
    try {
      const profile = await profileRepository.find({});
      return onSuccess(200, {
        profile,
      });
    } catch (err) {
      logger.error(err);
      onError(503, err);
    }
  }

  const findProfile = async request => {
    const {
      profileId,
      onSuccess,
      onError,
    } = request;

    try {
      const [profile] = await profileRepository.find({ _id: profileId });

      if (!profile) {
        return onError(404, { message: 'Profile not found' });
      }

      return onSuccess(200, profile);
    } catch (err) {
      logger.error(err);
      return onError(503, err);
    }
  }

  return {
    createProfile,
    listProfile,
    findProfile,
  };
};

module.exports = Profile;
