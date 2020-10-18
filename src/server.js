//	Import packages
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

//	Initializing Express
const server = express();

//	Using static file > Configuring Template Engine
server.use(express.static("public")).set("views", path.join(__dirname, "views")).set("view engine", "hbs");


//	Create Routes
server.get("/", pages.index);
server.get("/orphanage", pages.orphanage);
server.get("/orphanages", pages.orphanages);
server.get("/create-orphanage", pages.createOrphanage);

//	Turning on server
server.listen(5500);