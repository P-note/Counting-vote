let http = require('http');
let fs = require('fs');
let url = require('url');
let template = require('./lib/template.js');

let path = require('path');

const server = http.createServer((req,res) => {
    let _url = req.url;
    let par = url.parse(_url, true);
    let queryString = par.query;
    let pathname = par.pathname;
    if(pathname === '/'){
        if(queryString.id === undefined){
            fs.readdir('./data',function(err, filelist){
                let title = 'Eternity';
                let description = 'Realm of Eternity';
                let document = template.HTML(title, 
                    `<h2>${title}</h2>${description}`);
                res.writeHead(200);
                res.end(document);
            })
        }

        else{
            fs.readdir('./data',function(err, filelist){
                let id = path.parse(queryString.id).base;
                //console.log(id);
                fs.readFile(`data/${id}`,'utf8',function(err,description){
                    let title = queryString.id;
                    let document = template.HTML(title,
                        `<h2>${title}</h2>${description}`)
                    res.writeHead(200);
                    res.end(document);
                });
            });
        }
    }
});

server.listen(3000);
console.log('Listening on port 3000...');