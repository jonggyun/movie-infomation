// 파싱해온 값을 처리하기.

// http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20120101

const request = require('request');

const def= {
    key: '2fa3ebee376ffb9538891a8fbf0fbb1e',
    url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice'
}

// 1. 일별 박스 오피스
exports.dailyList = async (ctx) => {
    const { repNationCd, wideAreaCd } = ctx.request.body;
    const targetDt ='20120101';
    console.log("ctx.query", ctx.query);
    request({
        url: def.url + "/searchDailyBoxOfficeList.json",
        qs: { 
            key: def.key, 
            targetDt : targetDt,
            repNationCd, wideAreaCd
        },
        json: true
    }, (error, response, body) => {
        console.log(body.boxOfficeResult.dailyBoxOfficeList);
        console.log(" 여기 맞지? ");
        response.json = body;
        ctx.body = body;
        
    });
}

// 2. 주간/주말 박스 오피스
exports.weeklyList = async (ctx) => {
    const targetDt = '20120101';
    request({
        url: def.url + "/searchWeeklyBoxOfficeList.json",
        qs: { key: def.key, targetDt: targetDt },
        json: true
    }, (error, response, body) => {
        console.log(body);
    });
}

// 3. 영화목록
exports.movieList = async (ctx) => {
    request({
        url: def.url + "/searchMovieList.json",
        qs: { key: def.key },
        json: true
    }, (error, response, body) => {
        console.log(body);
    });
}

// 4. 영화상세정보
exports.movieInfo = async (ctx) => {
    request({
        url: def.url + "/searchMovieInfo.json",
        qs: { key: def.key },
        json: true
    }, (error, response, body) => {
        console.log(body);
    });
}
// 5. 영화사정보
exports.companyList = async (ctx) => {
    request({
        url: def.url + "/searchCompanyList.json",
        qs: { key: def.key },
        json: true
    }, (error, response, body) => {
        console.log(body);
    });
}

// 6. 영화사 상세정보
exports.companyInfo = async (ctx) => {
    request({
        url: def.url + "/searchCompanyInfo.json",
        qs: { key: def.key },
        json: true
    }, (error, response, body) => {
        console.log(body);
    });
}

// 7. 영화인 정보
exports.peopleList = async (ctx) => {
    request({
        url: def.url + "/searchPeopleList.json",
        qs: { key: def.key },
        json: true
    }, (error, response, body) => {
        console.log(body);
    });
}

// 8. 영화인 상세정보
exports.peopleInfo = async (ctx) => {
    request({
        url: def.url + "/searchPeopleInfo.json",
        qs: { key: def.key },
        json: true
    }, (error, response, body) => {
        console.log(body);
    });
}