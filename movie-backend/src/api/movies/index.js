const Router = require('koa-router');
const moviesCtrl = require('./movies.ctrl');

const movies = new Router();

movies.get('/', moviesCtrl.list);

module.exports = movies;