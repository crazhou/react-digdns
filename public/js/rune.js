(function(){
  

  function fetchDomains(token) {
    return axios({
      baseURL : 'https://api.digitalocean.com/v2/',
      url: '/domains',
      method: 'get',
      headers: {
        'Content-Type':'application/json',
        'Authorization' : 'Bearer ' + token,
      }
    });
  }

  if(Loginuser && Loginuser.access_token) {
    fetchDomains(Loginuser.access_token).then(function(resp) {
      console.log('RESP->', resp)
    })
  }
})();