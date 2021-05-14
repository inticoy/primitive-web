var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

function templateHTML(title, list, body, control) {
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
      ${control}
      ${body}
      </div>
    </div>
  </body>
  `;

}

function templateLIST(filelist) {
  var list = `<ul>`;
  var i = 0;
  while (i < filelist.length) {
    list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
    i++;
  }
  list = list + `</ul>`
  return list;
}

var app = http.createServer(function(request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var title = queryData.id
  var pathname = url.parse(_url, true).pathname;

  if (pathname === '/') {
    if (queryData.id === undefined) {
      fs.readdir('./data', function(error, filelist) {
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        var list = templateLIST(filelist);
        var template = templateHTML(title, list, `<h2>${title}</h2><p>${description}</p>`, `<a href="/create">create</a>`)
        response.writeHead(200);
        response.end(template);
      })
    } else {
      fs.readdir('./data', function(error, filelist) {
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, data) {
          var title = queryData.id;
          var description = data;
          var list = templateLIST(filelist);
          var template = templateHTML(title, list, `<h2>${title}</h2><p>${description}</p>`,
            `
            <a href="/create">create</a>
            <a href ="/update?id=${title}">update</a>
            <form action="delete_process" method ="post">
              <input type="hidden" name="id" value="${title}">
              <input type="submit" value="delete">
            </form>
            `)
          response.writeHead(200);
          response.end(template);
        })
      });
    }
  } else if (pathname === "/create") {
    fs.readdir('./data', function(error, filelist) {
      var title = 'WEB - create';
      var list = templateLIST(filelist);
      var template = templateHTML(title, list, `
        <form action="/create_process" method="post">
          <p><input type="text" name="title" placeholder="title"></p>
          <p>
            <textarea name="description" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit">
          </p>
        </form>`, ``)
      response.writeHead(200);
      response.end(template);
    })
  } else if (pathname === "/create_process") {
    var body = '';
    request.on('data', function(data) {
      // Too much POST data, kill the connection.
      body = body + data;
      if (body.length > 1e6)
        request.connection.destroy();
    });
    request.on('end', function() {
      var post = qs.parse(body);
      var title = post.title;
      var description = post.description;
      fs.writeFile(`data/${title}`, description, 'utf8', function(err) {});
      response.writeHead(302, {
        Location: `/?id=${title}`
      }); // 302 means redirection to page
      response.end("success");
    });
  } else if (pathname === "/update") {
    fs.readdir('./data', function(error, filelist) {
      fs.readFile(`data/${queryData.id}`, 'utf8', function(err, data) {
        var title = queryData.id;
        var description = data;
        var list = templateLIST(filelist);
        var template = templateHTML(title, list, `
          <form action="/update_process" method="post">
            <input type="hidden" name="id" value="${title}">
            <p><input type="text" name="title" placeholder="title", value="${title}"></p>
            <p>
              <textarea name="description" placeholder="description", value=${description}></textarea>
            </p>
            <p>
              <input type="submit">
            </p>
          </form>
          `,
          `<a href="/create">create</a> <a href ="/update?id=${title}">update</a>`);

        response.writeHead(200);
        response.end(template);
      })
    });
  } else if (pathname === "/update_process") {
    var body = '';
    request.on('data', function(data) {
      // Too much POST data, kill the connection.
      body = body + data;
      if (body.length > 1e6)
        request.connection.destroy();
    });
    request.on('end', function() {
      var post = qs.parse(body);
      var title = post.title;
      var description = post.description;
      var id = post.id
      fs.rename(`data/${id}`, `data/${title}`, function(error) {
        fs.writeFile(`data/${title}`, description, 'utf8', function(err) {
          response.writeHead(302, {
            Location: `/?id=${title}`
          }); // 302 means redirection to page
          response.end();
        })
      });
      //fs.writeFile(`data/${title}`, description, 'utf8', function(err) {});
    });
  } else if (pathname === "/delete_process") {
    var body = '';
    request.on('data', function(data) {
      // Too much POST data, kill the connection.
      body = body + data;
      if (body.length > 1e6)
        request.connection.destroy();
    });
    request.on('end', function() {
      var post = qs.parse(body);
      var id = post.id
      fs.unlink(`data/${id}`, function(err) {
        response.writeHead(302, {
          Location: `/`
        });
        response.end();
      });
      //fs.writeFile(`data/${title}`, description, 'utf8', function(err) {});
    });
  } else {
    response.writeHead(404);
    response.end("Not found");
  }



});
app.listen(3000);