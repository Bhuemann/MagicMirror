function route(handle, pathname, response, request) {
	console.log("About to route a request for " + pathname);

	//check that handle has a handler for the pathname request
	if (typeof handle[pathname] === 'function') {
		return handle[pathname](response, request);//execute handler
	} else {
		//to get here, there must not have been a handler for pathname request
		console.log("No request handler found for " + pathname);

		//respond to the client
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not found. Fuck.");
		response.end();
	}
}

exports.route = route;