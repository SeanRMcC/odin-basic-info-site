const path = require("path");
const http = require("http");
const fs = require ("fs");

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, "routes", req.url === "/" ? "index.html" : `${req.url}.html`);
    let contentType = { "Content-Type": "text/html" };

    fs.readFile(filePath, (err, data) => {
        if(err){
            if(err.code === "ENOENT"){
                const errorFile = path.join(__dirname, "routes", "404.html");
                fs.readFile(errorFile, (err, data) => {
                    res.writeHead(200, contentType);
                    res.end(data, "utf8");
                })
            }else{
                res.writeHead(200, contentType);
                res.end("Server error :(");
            }
        }else{
            res.writeHead(200, contentType);
            res.end(data, "utf8");
        }
        
    });
});

const PORT = 8080;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));