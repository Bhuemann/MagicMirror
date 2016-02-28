function start() {
	console.log("Request handler 'start' was called.");
	return "Hello start";
}

function login() {
	console.log("Request handler 'login' was called.");
	return "Hello login";
}

function newUser() {
	console.log("Request handler 'newUser' was called.");
	return "Hello newUser";	
}

exports.start = start;
exports.login = login;
exports.newUser = newUser;