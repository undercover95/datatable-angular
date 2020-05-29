"use strict";
exports.__esModule = true;
var jsonServer = require("json-server");
var faker = require("faker");
var fs = require("fs");
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(router);
var posts = [];
for (var i = 0; i < 100; i++) {
    posts.push({
        title: faker.name.title(),
        author: faker.name.firstName(),
        createdOn: faker.date.recent(30),
        updatedOn: faker.date.future(10),
        content: faker.lorem.paragraph(4),
        imageUrl: faker.image.nightlife(600, 400)
    });
}
fs.writeFile("db.json", JSON.stringify({ posts: posts }), function () {
    var port = 4000;
    server.listen(port, function () { return console.log("JSON Server is running on port: " + port + "."); });
});
