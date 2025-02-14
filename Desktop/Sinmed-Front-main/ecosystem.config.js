module.exports = {
  apps: [
    {
      name: 'next-app',
      script: 'npm start',
      watch: true,
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
