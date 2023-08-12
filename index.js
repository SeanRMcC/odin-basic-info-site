const path = require("path");
const http = require("http");
const fs = require ("fs");

const server = http.createServer((req, res) => {
    res.end("Hello")
});

const PORT = 8080;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));