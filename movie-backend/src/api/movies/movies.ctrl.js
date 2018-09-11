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

exports.list = async (ctx) => {
    console.log('im here.....');

    request({
        url: url,
        json: true
    }, (error, response, body) => {
        console.log('in the request');
        console.log(body.boxOfficeResult);
    } );

}

exports.detail = async (ctx) => {
    console.log("im not here");
    request({
        url: url,
        json: true
    }, (error, response, body) => {
        console.log('in the request2');
        console.log(body.boxOfficeResult);
    } );

} 