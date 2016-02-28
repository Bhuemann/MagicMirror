var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};//initialize empty handle object

//match requests to handlers
handle["/"] = requestHandlers.start;//set empty request to the start handler
handle["/start"] = requestHandlers.start;
handle["/login"] = requestHandlers.login;
handle["/newUser"] = requestHandlers.newUser;

server.start(router.route, handle);