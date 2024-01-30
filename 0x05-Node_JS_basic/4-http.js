/* eslint-disable */
const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type' : 'application/json',
    });
    res.end("Hello Holberton School!");
});

server.listen(1245, () => {
    console.log("Server is listening on port 1245");
});
