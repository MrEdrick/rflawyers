const PROXY_CONFIG = [
    {
      context: ['/api/'],
      target: 'https://99.79.89.235/api/',
      secure: true,
      logLevel: 'debug'
      // pathRewrite: {'^/api' : ''}
    }
  ];

module.exports = PROXY_CONFIG;