const express = require('express');
const app = express();
const oauth = require('./tools/oauth');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redisOption = require('./config/redis');
const appOption = require('./config/app');
const _ = require('lodash');

app.set('trust proxy', 1) // Trust first proxy

app.use(session({
    store: new RedisStore(redisOption),
    secret:'borningh',
    name:'DOCSID',
    resave: false,
    saveUninitialized: true,
    cookie: { secure : false, maxAge:3600*1000, httpOnly:true}, 
}))

app.use(express.static('public', {
    etag:false,
    maxAge:'1d',
    index:false
}));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    let data = {
        loginUrl:appOption.oauthURL
    };
    _.extend(data, req.session);

    res.render('index', data);
});

// 调试方法，显示真实的会话ID 还有 刷新access_token
app.get('/dump', function(req, res) {
    var query = req.query;
    if('sessionId' in query) {
        res.send('SessionId->'+req.sessionID);
        return;
    }

    if('refresh' in query) {
        
        var rf = req.session.loginUser.refresh_token;

        oauth.refreshToken(rf, function(body) {
            req.session.loginUser = body;
            res.json(body);
        }, function(errobj) {
            res.send(`error:${errobj.error}, errorDetail:${errobj.error_description}`);
        })
        return;
    }

    res.json(req.session.loginUser);
    
})

app.get('/logout', function(req, res) {
    req.session.isLogin = false;
    delete req.session.loginUser;
    req.session.destroy(function(){
        res.redirect('/?isLogin=false');
    })
});

app.get('/oauthLogin', function(req, res) {
    let code = req.query.code;

    if(code) {
        oauth.fetchAT(code, function(body) {
            req.session.isLogin = true;
            req.session.loginUser = body;
            res.redirect('/?isLogin=true')
        }, function(errobj) {
            res.send(`error:${errobj.error}, errorDetail:${errobj.error_description}`);
        })
    } else {
        res.end('非法的URL!');
    }
});


app.listen(8001, '0.0.0.0',  function() {
    let addr = this.address();
    console.log('Server start in %s:%s', addr.address, addr.port);
});