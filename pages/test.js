const APIURL = process.env.DOMAIN + process.env.APIURI + 'sitemaps'
var axios = require('axios');

const test = async() => {
  var res;
  await axios.get(APIURL)
  .then( function (response) {
     res = response.data.content;
  })
  .catch(function (error) {
  })
  .then(function () {
    // always executed
  }); 
  return res;
}
module.exports = test