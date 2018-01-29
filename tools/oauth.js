const request = require('request');
const config = require('../config/app');

function fetchAT(code, fn, errfn) {
    return request({
        url : config.fetchAT,
        timeout: 20 * 1000,
        json:true,
        method:'POST',
        form : {
            code: code,
            grant_type : 'authorization_code',
            client_id : config.clientId,
            client_secret : config.clientSecret,
            redirect_uri : config.redirectUrl,
        }
    }, function(err, response, body) {
        if(!err) {
            if(response.statusCode === 200 && body) {
                fn&&fn(body);
            } else {
                errfn && errfn({
                    statusCode :  response.statusCode,
                    error: body.error,
                    error_description : body.error_description
                })
                console.log('Response code not 200', response.statusCode, response.body, response.headers);
            }
        } else {
            console.log('Request Error', err);
        }
    });
}

function refreshToken(rt) {
    return request({
        url : config.fetchAT,
        timeout: 20 * 1000,
        json:true,
        method:'POST',
        form : {
            refresh_token:rt,
            grant_type : 'refresh_token',
        }
    }, function(err, response, body) {
        if(!err) {
            if(response.statusCode === 200 && body) {
                fn&&fn(body);
            }
        } else {
            console.log('Request Error', err);
        }
    })
}

module.exports = {
    fetchAT,
    refreshToken
}