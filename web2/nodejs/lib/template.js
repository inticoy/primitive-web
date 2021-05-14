module.exports = {
  html: function(title, list, body, control) {
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
  },
  list: function(filelist) {
    var list = `<ul>`;
    var i = 0;
    while (i < filelist.length) {
      list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
      i++;
    }
    list = list + `</ul>`
    return list;
  }
}

// module.exports = template;