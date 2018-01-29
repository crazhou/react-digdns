const express = require('express');
const app = express();
const oauth = require('./tools/oauth');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redisOption = require('./config/redis');
const appOption = require('./config/app');

app.set('trust proxy', 1) // Trust first proxy

app.use(session({
    store: new RedisStore(redisOption),
    secret:'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure : false, maxAge:null, httpOnly:true}, 
}))

app.use(express.static('public', {etag:false, maxAge:'1d', index:false}));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    let data = {
        loginUrl:appOption.oauthURL
    }
    res.render('index', data);
})

app.get('/oauthLogin', function(req, res) {
    let code = req.query.code;
    console.log('Code--->', code);
    if(code) {
        oauth.fetchAT(code, function(body) {
            console.log('Body->', body);
            res.json(body);
        })
    } else {
        res.end('非法的URL!');
    }
});


app.listen(8001, '0.0.0.0',  function() {
    let addr = this.address();
    console.log('Server start in %s:%s', addr.address, addr.port);
});