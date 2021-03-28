const PROXY_CONFIG = [
    {
      context: ['/api/'],
      target: 'http://172.26.9.156/api/',
      secure: true,
      logLevel: 'debug',
      changeOrigin: true 
      //pathRewrite: {'^/api' : ''}
    }
  ];

module.exports = PROXY_CONFIG;