import {Server_URL} from './components/Config';
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: `${Server_URL}`,
            changeOrigin: true,
        })
    );
};