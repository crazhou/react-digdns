(function() {
  function $(_) {
    return document.getElementById(_);
  }

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
      if(resp.status === 200 && resp.data) {
        var total = resp.data.meta.total;
        $('countDo').innerHTML = total + '个域名';
      }
    })
  }
})();