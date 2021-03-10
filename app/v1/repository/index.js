const ProfileRepository = require('./profile');
const UserRepository = require('./user');

module.exports = db => ({
  userRepository: UserRepository(db),
  profileRepository: ProfileRepository(db),
});
