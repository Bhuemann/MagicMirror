function start() {
	console.log("Request handler 'start' was called.");

}

function login() {
	console.log("Request handler 'login' was called.");
	
}

exports.start = start;
exports.login = login;