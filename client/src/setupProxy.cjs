import {Server_URL} from './components/Config';
import createProxyMiddleware from 'http-proxy-middleware'
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: `${Server_URL}`,
            changeOrigin: true,
        })
    );
};