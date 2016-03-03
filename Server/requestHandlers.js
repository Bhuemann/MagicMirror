var querystring = require("querystring");//used to parse postData
var fs = require("fs"); //used to serve media
var formidable = require("formidable");//used to receive media from client
var loginPage = require("./loginPage");

function start(response) {
	console.log("Request handler 'start' was called.");
	/*
	var body = '<html>' +
		'<head>' +
		'<meta http-equiv="Content-Type" content="text/html;' +
		'charset=UTF-8" />' +
		'</head>' +
		'<body>' +
		'<form action="/upload" method="post" enctype="multipart/form-data">' +
		'<input type="file" name="upload" />' + 
		'<input type="submit" value="Upload file" />' + 
		'</form>' +
		'</body>' +
		'</html>';*/

		var body = loginPage.content();

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

function upload(response, request) {
	console.log("Request handler 'upload' was called.");
	var form = new formidable.IncomingForm();
	console.log("about to parse");
	form.parse(request, function(error, fields, files) {
		console.log("parsing done");

		fs.rename(files.upload.path, "./tmp/test.png", function(error) {
			if (error) {
				fs.unlink("./tmp/test.png");
				fs.rename(files.upload.path, "./tmp/test.png");
			}
		});
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("received image:<br/>");
		response.write("<img src='/show' />");
		response.end();
	});
}

function login(response, postData) {
	console.log("Request handler 'login' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello login");
	response.end();
}

function newUser(response, postData) {
	console.log("Request handler 'newUser' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello newUser");
	response.end();	
}

function show(response) {
	console.log("Request handler 'show' was called.");
	response.writeHead(200, {"Content-Type": "image/png"});
	fs.createReadStream("./tmp/test.png").pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.login = login;
exports.newUser = newUser;
exports.show = show;