# Node.js

# 0. 강의



- 생활코딩, WEB 2
    - [https://opentutorials.org/course/3332](https://opentutorials.org/course/3332)
    - [https://youtube.com/playlist?list=PLuHgQVnccGMA9QQX5wqj6ThK7t2tsGxjm](https://youtube.com/playlist?list=PLuHgQVnccGMA9QQX5wqj6ThK7t2tsGxjm)
- My repository
    - [https://github.com/inticoy/open-tutorials-web](https://github.com/inticoy/open-tutorials-web)

## 0.1. css) style.css 적용 관련 의문



- 수업에서는 WEB1에서 제작한 html 코드 사용. 나는 WEB2 CSS 강의에서 제작한 CSS 스타일이 적용된 html 파일에서 var template = ` ~~ `; 설정했는데 스타일이 적용되지 않는 문제가 발생.
    - express라는 module을 사용하면 static으로 저장해놓고 사용하는 style.css와 같은 파일들에 접근할 수 있게끔 하는 것 같음. 강의를 들은 뒤 시도해볼 예정.

## 0.2. html) list가 예상보다 2배씩 많이 나올 때



- <li> tag를 </li>로 닫지 않고 마지막에도 <li>로 쓰지는 않았나 확인해보자.

# 1. 수업 소개



- JavaScript는 웹브라우저에서 독점적으로 사용할 수 있는 언어, 다른 말로는 갇혀있는 언어.
- Node.js는 JavaScript를 이용하여 브라우저가 아닌 컴퓨터 자체를 다룰 수 있게 함.
- 웹페이지를 찍어내는 공장인 웹애플리케이션의 공장장이 되어보자.
- 사람은 컨텐츠를 생성하는 창의적인 일에만 전념할 수 있도록 해보자.

# 2. 수업의 목적



- 우리의 관심성은 생산성.
- 웹페이지 목차의 ol(ordered list) tag를 ul(unordered list) tag로 변경하고자 한다면?
- Node.js를 사용하지 않는다면 일일히 모든 웹페이지들의 태그들을 변경해야 함.
- Node.js는 사용자가 요청할 때마다 순간순간에 웹페이지를 생성해내기 때문.
- Node.js는 사용자의 참여를 적극적으로 활용할 수 있게끔한다.

# 3. 설치



- Node.js runtime을 통해 JavaScript라는 언어를 사용할 수 있다.

```c
>node

>console.log(1+1);
2
undefined

>ctrl ^c (twice to exit)
```

# 4. 공부방법



- 목표: Node.js를 이용하여 Node.js Application 제작

1. JavaScript 문법
2. Node.js 기능
3. Node.js Application

# 5. Node.js 웹서버 만들기



- Node.js는 Apachi 웹서버와 같이 웹서버로서의 기능을 할 수 있다.

```jsx
var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;
    }
    response.writeHead(200);
    console.log(__dirname + url);
    response.end(fs.readFileSync(__dirname + url)); // send to user
});
app.listen(3000);
```

# 6. JavaScript Datatype



- Number
- String
- Boolean
- Array
- Object
- and so on...

## 6.1. Number Data Type



```jsx
console.log(1+1);
console.log(4-1);
console.log(2*2);
console.log(10/2);
```

## 6.2. String



```jsx
console.log('can use single quotation marks.');
console.log("also can use double quotation marks.");
console.log('use + to add' + 'String');
console.log("automatically add str and int like " + 123)

var str = "Hello World!";
console.log(str.length + " letters");
```

# 7. JavaScript Variable



## 7.1. Variable Types



```jsx
a = 1;
console.log(a);
a = 2;
console.log(a);

console.log("comment to //, same as Java")
console.log("good to write var in front of variable")

var b = 10;
b = 15;
```

## 7.2. Variable Usages



```jsx
var name = 'inticoy';
var letter = 'Lorem ipsum dolor sit amet,' + name + ' consectetur adipisicing elit,'
+ name + ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+ name +
' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa egoing qui officia deserunt mollit anim id est laborum.'

console.log(letter);
```

# 8. JavaScript Template Literal



```jsx
var name = 'inticoy';
var letter = 'Lorem ipsum dolor sit amet,' + name + ' consectetur adipisicing elit,'
+ name + ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'+ name +
' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\
\
aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa egoing qui officia deserunt mollit anim id est laborum.'

console.log(letter);
console.log("\noriginally, \n \\n to change line\n");

letter = `Lorem ipsum dolor sit amet, ${name} consectetur adipisicing elit,

${name} sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
${1+1}
' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa egoing qui officia deserunt mollit anim id est laborum.`

console.log(letter);
```

# 9. Node.js URL의 이해



- http://opentutorials.org:3000/main?id=HTML&page=12
- 포트번호를 생략하면 80번 포트에 접속함 (기본값이 80)

http - hyper text transfer protocol

[opentutorials.org](http://opentutorials.org) - host(domain) 어떤 컴퓨터를 가리키는 주소

:3000 - 한대의 컴퓨터 안에 여러 개의 서버가 있을 경우 3000번 포트와 연결

main - 어떤 파일인가

id=HTML&page=12 - query string (물음표로 시작, &로 구분, =로 값 설정)

# 10. Node.js URL을 통해서 입력된 값 사용하기



- http://localhost/?id=HTML

```jsx
var url = require('url'); // use module

// url parsing
var _url = request.url;
var queryData = url.parse(_url, true).query;
console.log(queryData.id);

// send
response.end(queryData.id); // sends HTML to webbrowser
```

# 11. App. 동적인 웹페이지 만들기



- var template을 만들어 <title>, <h2> tag의 값을 ${변수} 값으로 바꿀 수 있음.
- 그렇다면 제목말고 내용은 어떻게 바꿀 수 있을까?
- html 파일이 제목부터 디자인 정보, 본문 내용 등의 정보를 모두 가지고 있는 것과 달리, 파일에는 이제 본문 내용만 두고, 그 내용을 읽어와 웹페이지를 보여주는 방식을 사용해보자.

# 12. Node.js 파일 읽기 기능



< CRUD, Create, Read, Update, Delete 중, >

- FILE을 어떻게 읽을 것인가?

```jsx
var fs = require('fs');

fs.readFile('sample.txt', 'utf8', function(err, data){
  console.log(data);
})
```

# 13. App. 파일을 이용해 본문 구현



```jsx
var queryData = url.parse(_url, true).query;

var title = queryData.id

fs.readFile(`data/${queryData.id}`, 'utf8', function(err, data){
	var description = data;
  var template = `~~~~`;
	response.end(template);
})
```

# 14. JavaScript Boolean



- Boolean datatype, Comparison operator, Conditional statement

```jsx
console.log(true);
console.log(false);
```

# 15. JavaScript 비교 연산자



```jsx
console.log(1==1); // true
console.log(1==2); // false
console.log(1>2); // false
console.log(1<2); // false
console.log(1===1); // true
console.log(1===2); // false
```

# 16. JavaScript 제어문



- Flow control statements
- 조건문
- 반복문

# 17. JavaScript 조건문



- Conditional statement

```jsx
if(true){
  console.log('C1');
} else {
  console.log('C2');
}
```

# 18. Node.js 콘솔에서의 입력 값



- Code

```jsx
var args = process.argv;
console.log(args);
```

- Cmd

```jsx
> node conditional.js
[
  'C:\\Program Files\\nodejs\\node.exe',
  'D:\\PROGRAMMING\\WebProgramming\\web\\syntax_js\\conditional.js'
]
```

- 아직 JavaScript에서의 배열을 배우지 않았지만, args[i]의 형태로 argument에 접근할 수 있다고 생각할 수 있음.

# 19. App. 홈페이지 구현



## 19.1. App. Not found 구현



```jsx
var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
	var _url = request.url;
	var queryData = url.parse(_url, true).query;
	var title = queryData.id
	var pathname = url.parse(_url, true).pathname;

	if(pathname === '/'){
		fs.readFile(`data/${queryData.id}`, 'utf8', function(err, data){
			var description = data;
		  var template = `~~~`;
			response.writeHead(200);
		  response.end(template);
		})
	} else {
	      response.writeHead(404);
	      response.end("Not found");
	}
});

app.listen(3000);
```

## 19.2. App. 홈페이지 구현



```jsx
if(pathname === '/'){
      if(queryData.id === undefined){
        var title = 'Welcome';
        var description = 'Hello, Node.js';
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
              <p>${description}</p>
            </div>
          </div>
        </body>
        `;
        response.writeHead(200);
        response.end(template);
      } else {
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, data){
          var title = 'Welcome';
          var description = data;
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
                <p>${description}</p>

                <img width="500px" src="test.jpg">
              </div>
            </div>
          </body>
          `;
          response.writeHead(200);
          response.end(template);
        })
      }
    } else {
      response.writeHead(404);
      response.end("Not found");
    }
```

# 20. JavaScript 반복문



```jsx
var i = 0;
while(i < 10){
  console.log('C');
  i = i + 1;
}
```

# 21. JavaScript 배열



```jsx
var arr = ['a', 'b', 'c'];
console.log(arr[0]); // a
console.log(arr[1]); // b
console.log(arr[2]); // c

arr[1] = 3;

console.log(arr); // ['a', 3, 'c']
console.log(arr.length); // 3

arr.push('D');

console.log(arr); // ['a', 3, 'c', 'D']
```

# 22. JavaScript 배열과 반복문



```jsx
var number = [1, 400, 12, 34, 5];
var len = number.length;
var i = 0
var total = 0

while(i < len){
  console.log(number[i]);
  total += number[i];
  i = i + 1;
}

console.log(`total: ${total}`);
```

# 23. Node.js 파일목록 알아내기



- 단, 실행은 /data 폴더에 접근할 수 있는 상위폴더에서 실행할 것.

```jsx
D:\PROGRAMMING\WebProgramming\web> node nodejs/readdir.js

var testFolder = './data/';
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
})
```

# 24. App. 글목록 출력하기



```jsx
var list = `<ul>`;
var i = 0;
while(i < filelist.length){
  list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
  i++;
}
list = list + `</ul>`

// use variable list in var template by ${list}
```

# 25. JavaScript 함수



## 25.1. JavaScript 함수의 기본



```jsx
f123();
f123();

function f123(){
  console.log(1);
  console.log(2);
  console.log(3);
}
```

- 함수의 선언 위치는 상관이 없음.

## 25.2 JavaScript 함수의 입력



```jsx
console.log(Math.round(1.6)) //2
console.log(Math.round(1.4)) //1

function sum(first, second){
  console.log(first + second);
}

sum(2,4);
```

## 25.3 JavaScript 함수의 출력



```jsx
 function sum(first, second){
  console.log('a');
  return first+second;
  console.log('b'); // doesn't execute
}

console.log(sum(2,4));
```

# 26. 함수를 이용해 정리 정돈하기



```jsx
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
```

# 27. 수업의 정상



- 앞선 내용까지가 정말 중요한 개념들.
- 뒷 내용부터는 세부적인 내용들

# 28. Node.js 동기와 비동기



- Synchronous & asynchronous

## 28.1. 동기와 비동기1



Synchronous - 직렬적으로 한 일이 끝나면 다음일을 처리하는 것.

Asynchronous - 병렬적으로 여러 가지 일을 동시에 처리하는 것.

## 28.2 동기와 비동기 2



- Node.js Documentation의 File System Tab
- fs.linkSync, fs.lstat, fs.lstatSync, fs.readfile, fs.readfileSync 등 함수의 이름에 Sync가 붙은 것이 있고 아닌 것이 있음.
- Sync인 함수의 경우 인자에 Callback이 없음
- Sync 함수의 경우 순차적으로 실행

```jsx
var fs = require('fs');

// readFileSync
console.log("A-sync");
var result = fs.readFileSync('syntax_js/sample.txt', 'utf-8');
console.log(result + "-sync");
console.log("C-sync");
// A, B, C

// readFile with out sync = asynchronous
console.log("A");
fs.readFile('syntax_js/sample.txt', 'utf8', function(err, result) {
  console.log(result);
});
console.log("C");
// A, C, B
```

## 28.3 JavaScript Callback



readFile 함수를 예시로  들 경우,

- 파일을 읽어온 후에 나중에 전화해 줘(나중에 실행해 줘)
- 내가 이해한 바로는, 자바스크립트도 함수형 언어이기 때문에 프로그래밍 언어론에서 배운 것과 같이 함수가 값으로 여겨질 수 있다. 따라서 var b = function으로 선언할 수 있고, 함수를 다룰 때에도 변수와 같이 다룰 수 있는 것이다.

```jsx
// has name
function a() {
  console.log('A');
}

// no-name (anonymous function)
var b = function() {
  console.log('B');
}

a();
b();

function slowfunc(callback) {
  callback();
}

slowfunc(a);
```

# 29. Node.js Package Manager & PM2



Package : 독립적으로 실행되는 프로그램 / 프로그램 내의 부품으로 사용되는 작은 프로그램

- 그러한 패키지를 생성, 설치, 업데이트, 삭제를 관리해주는 프로그램이 패키지 매니저

### NPM

- 기본적으로 Node.js를 설치하면 자동으로 설치되는 Package Manager
- npm install ~~ 과 같은 형식으로 패키지를 설치할 수 있다.
    - ex, pm2라는 패키지는 프로그램이 종료 시 자동으로 다시 실행시켜주거나 파일이 수정되는 즉시 자동으로 프로그램을 껐다가 다시 켜서 적용시켜주는 기능을 한다.

### PM2

- 설치 방법

```jsx
npm install pm2 -g // -g: 독립된 소프트웨어여서 어디에서든지 사용할 수 있어야한다는 옵션
// access denied 시 맨 앞에 sudo를 붙이면 해결됨 (관리자 권한)
```

- PM2 사용법

```jsx
pm2 start main.js // start
pm2 monit // monitor
pm2 list // running program list
pm2 stop main // stop main.js program
pm2 start main.js --watch // restart when changes file
pm2 log // show log if sth changes or makes error
```

# 30. HTML Form



- 누구나 웹을 통해 데이터를 전송하고 데이터 directory 안에 생성하는 방법은 없을까?

```html
<form action="http://localhost:3000/process_create">
  <p><input type="text" name="title"></p>
  <p>
    <textarea name="description"></textarea>
  </p>
  <p>
    <input type="submit">
  </p>
</form>
```

- [http://localhost:3000/process_create?title=testtitle&description=hello](http://localhost:3000/process_create?title=testtitle&description=hello%0D%0A)/
- 주소에 데이터가 들어있다면 누군가 주소를 통해 서버의 값을 임의로 변경하거나 삭제, 추가할 수 있는 가능성이 생기므로 절대로 정보를 url을 통해 전송하면 안 된다.
- 눈에 보이지 않는 방식으로 보내야 한다.
- 이렇게 보내면 데이터가 엄청나게 크면 url은 유한하기 때문에 짤릴 수도 있다.
- 따라서 아래와 같이 해야한다.

```html
<form action="http://localhost:3000/process_create" method="post">
  <p><input type="text" name="title"></p>
  <p>
    <textarea name="description"></textarea>
  </p>
  <p>
    <input type="submit">
  </p>
</form>
```

- [http://localhost:3000/process_create](http://localhost:3000/process_create)

# 31. App. 글 생성 UI 만들기



```jsx
// in function templateHTML(title, list, body),
// add
<a href="/create">create</a> // link

// in var app = http.createServer(function(request, response) {,
// add
else if (pathname === "/create") {
    fs.readdir('./data', function(error, filelist) {
      var title = 'WEB - create';
      var list = templateLIST(filelist);
      var template = templateHTML(title, list, `
        <form action="http://localhost:3000/process_create" method="post">
          <p><input type="text" name="title" placeholder="title"></p>
          <p>
            <textarea name="description" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit">
          </p>
        </form>`)
      response.writeHead(200);
      response.end(template);
    })
  }
```

- Request Method : POST
- Form Data {title: "", description: ""}
- 다음 강의에서 POST Form Data를 가져오는 방법에 대해서 알아보자.

# 32. App. POST 방식으로 전송된 데이터 받기



```jsx
var qs = require('querystring');

else if (pathname === "/create_process") {
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
      console.log(post);
      console.log(title);
      console.log(description);
    });
    response.writeHead(200);
    response.end("success");}
```

# 33. App. 파일생성과 리다이렉션



```jsx
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
```

- 파일이 생성된 후 생성된 페이지로 이동(리다이렉션) 되도록 해보자.

# 34. App. 글 수정 - 수정 링크 생성



```jsx
function templateHTML(title, list, body, control)

// at each page
var template = templateHTML(title, list, `<h2>${title}</h2><p>${description}</p>`,
            `<a href="/create">create</a> <a href ="/update?id=${title}">update</a>`)
// goes to /update?id=pagename
```

- 홈화면에서는 update 버튼이 보이지 않도록 하기 위해 control 인자 추가

# 35. App. 글 수정 - 수정할 정보 전송



```jsx
else if (pathname === "/update") {
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
  }
```

- input type을 hidden으로 설정하면 사용자에게는 웹 브라우저에서 보이지 않지만, POST 정보에는 정보가 감.
- 이를 통해 기존의 페이지 제목 정보를 POST를 통해 사용자가 임의로 수정하지 못하게 한 채로 보낼 수 있음.

# 36. App. 글 수정 - 파일명 변경, 내용 저장



```jsx
else if (pathname === "/update_process") {
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
          response.end("success");
        })
      });
      //fs.writeFile(`data/${title}`, description, 'utf8', function(err) {});
    });
  }
```

# 37. App. 글 삭제 - 삭제 버튼 구현


- Delete 버튼을 링크로 연결되도록 하면 안 된다.
- Delete 버튼을 Get 방식(querystring)으로 구현하면 링크를 찾아서 들어갈 경우 삭제되는 문제가 생긴다.
- 따라서 <a> 태그가 아닌 <form> 으로 해야한다.
- 버튼을 만들어 놓고 delete_process에서 기능 구현

```jsx
<form action="delete_process" method ="post">
  <input type="hidden" name="id" value="${title}">
	<input type="submit" value="delete">
</form>
```

# 38. App. 글 삭제 기능 완성


```jsx
else if (pathname === "/delete_process") {
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
  }
```

# 39. Javascript 객체의 형식
