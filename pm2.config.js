module.exports = {
  apps: [
    {
      name: 'umiFont',
      script: './server/server.js',
      env: {
        PORT: 3003,
        NODE_ENV: 'development',
      },
      env_prod: {
        PORT: `${process.env.PORT}`,
        NODE_ENV: 'production',
      },
    },
  ],
};
