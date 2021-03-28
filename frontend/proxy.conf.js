const PROXY_CONFIG = [
    {
      context: ['/api/'],
      target: 'https://www.rodriguesfranceschini.com/api',
      secure: false,
      logLevel: 'debug',
      changeOrigin: true, 
      pathRewrite: {'^/api' : ''}
    }
  ];

module.exports = PROXY_CONFIG;