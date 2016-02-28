function route(handle, pathname) {
	console.log("About to route a request for " + pathname);

	//check that handle has a handler for the pathname request
	if (typeof handle[pathname] === 'function') {
		handle[pathname]();//execute handler
	} else {
		//to get here, there must not have been a handler for pathname request
		console.log("No request handler found for " + pathname);
	}
}

exports.route = route;