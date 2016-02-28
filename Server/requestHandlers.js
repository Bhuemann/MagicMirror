var exec = require("child_process").exec;

function start(response) {
	console.log("Request handler 'start' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello start");
	response.end();
}

function login(response) {
	console.log("Request handler 'login' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello login");
	response.end();
}

function newUser(response) {
	console.log("Request handler 'newUser' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello newUser");
	response.end();	
}

exports.start = start;
exports.login = login;
exports.newUser = newUser;