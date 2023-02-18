var url = require('url');

var link = 'http://localhost:3000/?id=count';
var par = url.parse(link, true);



console.log(par);