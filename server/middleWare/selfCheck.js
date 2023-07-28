const dubbo = require('~/dubboService');
const {
  MessageHeader,
} = require('~/co/faao/plugin/transmission/request/MessageHeader');
let dubboService = dubbo.service;
async function getAllCheckResult() {
  let needCheckService = [];
  let servicesName = [];
  console.log(dubboService);
  for (let i in dubboService) {
    if (i.includes('_EchoService')) {
      needCheckService.push(
        dubboService[i].echo(
          new MessageHeader({
            params: i,
          }),
        ),
      );
      servicesName.push(i.split('_')[0]);
    }
  }
  let consumers = [];
  consumers = await Promise.all(needCheckService);
  consumers = consumers.map((re, index) => {
    if (re.res) {
      return {
        status: 'UP',
        name: servicesName[index],
        message: '',
      };
    } else {
      return {
        status: 'DOWN',
        name: servicesName[index],
        message: re.err && re.err.message,
      };
    }
  });
  let status = consumers.some((cs) => cs.status === 'DOWN') ? 'DOWN' : 'UP';
  return {
    consumers,
    status,
  };
}

module.exports = getAllCheckResult;
