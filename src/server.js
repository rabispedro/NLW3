//	Import packages
const express = require("express");
const server = express();

//	Create a route
server.get("/", () => {console.log("olar")});

//	Turning on server
server.listen(5500);