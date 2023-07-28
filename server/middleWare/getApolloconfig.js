const apollo = require('node-apollo');

async function getApolloConfig() {
  const config = {
    configServerUrl:
      process.env.NODE_ENV === 'development'
        ? 'http://192.168.198.124:32749'
        : process.env.apollometa,
    appId: 'shellweb-comm-ewell',
    clusterName: 'default',
    namespaceName: ['application'],
  };
  console.log('config--', config);
  try {
    let apolloConfig = await apollo.remoteConfigServiceSkipCache(config);
    if (
      apolloConfig &&
      typeof apolloConfig === 'object' &&
      Object.keys(apolloConfig).length > 0
    ) {
      apolloConfig = Object.keys(apolloConfig).reduce((prev, cur) => {
        const strArr = cur.split('.');
        const key = strArr[strArr.length - 1];
        return {
          ...prev,
          [key]: apolloConfig[cur],
        };
      }, {});
    }
    console.log(apolloConfig);
    return apolloConfig;
  } catch (e) {
    console.log('Failed to get apollo configs', e);
    return null;
  }
}
module.exports = getApolloConfig;
