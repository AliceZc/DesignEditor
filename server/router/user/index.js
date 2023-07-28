const service = require('./service');
const Directlydubbo = require('./Directlydubbo');
const isDev = process.env.NODE_ENV === 'development';

module.exports = isDev ? Directlydubbo : service;
