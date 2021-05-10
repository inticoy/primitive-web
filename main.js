var http = require('http');
var fs = require('fs');
var url = require('url');

function templateHTML(title, list, body){
  return `
  <!doctype html>
  <html>
  <head>
    <title>${title} practice</title>
    <mata charset = "utf-8">
    <link rel ="stylesheet" href="style.css">
  </head>

  <body>
    <h1> <a href="/">WEB</a> </h1>
    <div id="grid">
      ${list}
      <div id="article">
      ${body}
      </div>
    </div>
  </body>
  `;

}

function templateLIST(filelist){
  var list = `<ul>`;
  var i = 0;
  while(i < filelist.length){
    list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
    i++;
  }
  list = list + `</ul>`
  return list;
}

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id
    var pathname = url.parse(_url, true).pathname;

    if(pathname === '/'){
      if(queryData.id === undefined){
        fs.readdir('./data', function(error, filelist){
          var title = 'Welcome';
          var description = 'Hello, Node.js';
          var list = templateLIST(filelist);
          var template = templateHTML(title, list, `<h2>${title}</h2><p>${description}</p>`)
          response.writeHead(200);
          response.end(template);
        })
      } else {
        fs.readdir('./data', function(error, filelist){
          fs.readFile(`data/${queryData.id}`, 'utf8', function(err, data){
            var title = queryData.id;
            var description = data;
            var list = templateLIST(filelist);

            var template = templateHTML(title, list, `<h2>${title}</h2><p>${description}</p>`)
            response.writeHead(200);
            response.end(template);
          })
        });
      }
    } else {
      response.writeHead(404);
      response.end("Not found");
    }



});
app.listen(3000);
