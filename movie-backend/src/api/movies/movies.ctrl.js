// 파싱해온 값을 처리하기.

// http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20120101

const request = require('request');

const url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20120101";

const movies = [
    {
        key: '430156241533f1d058c603178cc3ca0e',
        targerDt: '20120101'
    }
];

// 1. 일별 박스 오피스
exports.dailyList = async (ctx) => {
    request({
        url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20120101",
        json: true
    }, (error, response, body) => {
        console.log(body);
    });
}

// 2. 주간/주말 박스 오피스
exports.weeklyList = async (ctx) => {
    request({
        url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20120101",
        json: true
    }, (error, response, body) => {
        console.log(body);
    });
}

// 3. 영화목록
exports.movieList = async (ctx) => {
    request({
        url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=430156241533f1d058c603178cc3ca0e",
        json: true
    }, (error, response, body) => {
        console.log(body);
    });
}

// 4. 영화상세정보
exports.movieInfoList = async (ctx) => {
    request({
        url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=430156241533f1d058c603178cc3ca0e&movieCd=20124079",
        json: true
    }, (error, response, body) => {
        console.log(body);
    });
}

// 5. 영화사정보
exports.companyList = async (ctx) => {
    request({
        url: "http://kobis.or.kr/kobisopenapi/webservice/rest/company/searchCompanyList.json?key=430156241533f1d058c603178cc3ca0e",
        json: true
    }, (error, response, body) => {
        console.log(body);
    });
}

// 6. 영화사 상세정보
exports.companyInfoList = async (ctx) => {
    request({
        url: "http://kobis.or.kr/kobisopenapi/webservice/rest/company/searchCompanyInfo.json?key=430156241533f1d058c603178cc3ca0e&companyCd=20122497",
        json: true
    }, (error, response, body) => {
        console.log(body);
    });
}

// 7. 영화인 정보
exports.peopleList = async (ctx) => {
    request({
        url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=430156241533f1d058c603178cc3ca0e",
        json: true
    }, (error, response, body) => {
        console.log(body);
    });
}

// 8. 영화인 상세정보
exports.peopleInfoList = async (ctx) => {
    request({
        url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleInfo.json?key=430156241533f1d058c603178cc3ca0e&peopleCd=20164556",
        json: true
    }, (error, response, body) => {
        console.log(body);
    });
}