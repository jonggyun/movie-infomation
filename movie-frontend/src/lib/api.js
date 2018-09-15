import axios from 'axios'; // REST API를 기분으로 promise를 간단하게 쓸 수 있음.
import queryString from 'query-string';

// repNationCd: 영화구분, wideAreaCd: 상영지역
export const dailyList = ({
  repNationCd,
  wideAreaCd
}) => axios.get('/api/movies/boxoffice/daily', {
  repNationCd,
  wideAreaCd
});
// weekGb: 주간/주말/주증, repNationCd: 영화구분, wideAreaCd: 상영지역
export const weeklyList = ({
  weekGb,
  repNationCd,
  wideAreaCd
}) => axios.get('/api/movies/boxoffice/weekly', {
  weekGb,
  repNationCd,
  wideAreaCd
});
// curPage: 현재 페이지, movieNm: 영화명, directorNm: 감독명, openDt: 개봉연도, prdtYear: 제작연도
export const movieList = ({
  curPage,
  movieNm,
  directorNm,
  openStartDt,
  openEndDt,
  prdtStartYear,
  prdtEndYear,
  repNationCd
}) => axios.get('/api/movies/movie', {
  curPage,
  movieNm,
  directorNm,
  openStartDt,
  openEndDt,
  prdtStartYear,
  prdtEndYear,
  repNationCd
});
// movieCd: 영화 코드
export const movieInfo = ({
  movieCd
}) => axios.get("/api/movies/movie/info", {
  movieCd
});
// curPage: 현재페이지, companyNm: 회사명, ceoNm: 대표명, companyPartCd: 회사코드
export const companyList = ({
  curPage,
  companyNm,
  ceoNm,
  companyPartCd
}) => axios.get('/api/movies/company', {
  curPage,
  companyNm,
  ceoNm,
  companyPartCd
});
// companyCd: 영화사 정보
export const companyInfo = ({
  companyCd
}) => axios.get('/api/movies/company/info', {
  companyCd
});
// curPage: 현재페이지, peopleNm: 영화인명, filmoNames: 필모리스트
export const peopleList = ({
  curPage,
  peopleNm,
  filmoNames
}) => axios.get('/api/movies/people', {
  curPage,
  peopleNm,
  filmoNames
});
// peopleCd: 영화인 코드
export const peopleInfo = ({
  peopleCd
}) => axios.get('/api/movies/people/info', {
  peopleCd
});