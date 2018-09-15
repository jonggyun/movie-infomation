const Router = require('koa-router');
const moviesCtrl = require('./movies.ctrl');

const movies = new Router();

movies.get('/boxoffice/daily', moviesCtrl.dailyList);
movies.get('/boxoffice/weekly', moviesCtrl.weeklyList);
movies.get('/movie', moviesCtrl.movieList);
movies.get('/movie/info', moviesCtrl.movieInfo);
movies.get('/company', moviesCtrl.companyList);
movies.get('/company/info', moviesCtrl.companyInfo);
movies.get('/people', moviesCtrl.peopleList);
movies.get('/people/info', moviesCtrl.peopleInfo);

module.exports = movies;