var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id
    console.log(queryData.id);

    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;
    }
    response.writeHead(200);
    var template = `
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
        <ol>
          <li><a href="/?id=HTML"class="saw" id="active">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ol>
        <div id="article">
          <h2>${title}</h2>

          <p>
            <a href="https://www.w3.org/TR/html52/" target="_blank" title="html5 specific">Hypertext Markup Language (HTML)</a>
            is the standard markup language for
          <strong> creating <u>web</u> pages </strong>
          and web applications.
          </p>
          <img width="500px" src="test.jpg">
        </div>
      </div>
    </body>

    `;
    response.end(template);

});
app.listen(3000);
