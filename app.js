const express = require('express');
const app = express();


app.use(express.static('public', {etag:false, maxAge:'1d'}));

app.get('/oauthLogin', function(req, res) {
    let code = req.query.code;
    if(code) {

    } else {
        res.end('非法的URL!');
    }
});


app.listen(8001, '0.0.0.0',  function() {
    let addr = this.address();
    console.log('Server start in %s:%s', addr.address, addr.port);
});