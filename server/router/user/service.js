const {
  IUserServiceProvider,
} = require('~/cc/ewell/authority/api/service/IUserServiceProvider');

const { EchoService } = require('~/cc/ewell/authority/api/service/EchoService');

module.exports = {
  IUserServiceProvider,
  'auth-auth-ewell_EchoService': EchoService,
};
