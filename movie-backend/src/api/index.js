const Router = require('koa-router');
const movies = require('./movies');

const api = new Router();

api.use('/movies', movies.routes());

module.exports = api;