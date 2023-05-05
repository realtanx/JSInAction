const http = require("http");
const host = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/plain"});
    res.end("Hello\n");
});

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});