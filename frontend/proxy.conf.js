const PROXY_CONFIG = [
    {
      context: ['/api/'],
      target: 'http://172.0.0.1:3000/api/',
      secure: true,
      logLevel: 'debug',
      changeOrigin: true 
      //pathRewrite: {'^/api' : ''}
    }
  ];

module.exports = PROXY_CONFIG;