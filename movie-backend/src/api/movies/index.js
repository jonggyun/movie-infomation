const Router = require('koa-router');
const moviesCtrl = require('./movies.ctrl');

const movies = new Router();

movies.get('/boxoffice', moviesCtrl.dailyList);
movies.get('/boxoffice', moviesCtrl.weeklyList);
movies.get('/movie', moviesCtrl.movieList);
movies.get('/movie/info', moviesCtrl.movieInfoList);
movies.get('/company', moviesCtrl.companyList);
movies.get('/company/info', moviesCtrl.companyInfoList);
movies.get('/people', moviesCtrl.peopleList);
movies.get('/people/info', moviesCtrl.peopleInfoList);

module.exports = movies;