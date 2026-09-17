const { createProxyMiddleware } = require('http-proxy-middleware');

const API_TARGET = process.env.API_PROXY_TARGET || 'https://verivote.jw-capstone.store';
const EXPLORER_TARGET = process.env.EXPLORER_PROXY_TARGET || API_TARGET;

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: API_TARGET,
      changeOrigin: true,
    })
  );

  app.use(
    '/explorer',
    createProxyMiddleware({
      target: EXPLORER_TARGET,
      changeOrigin: true,
    })
  );
};
