const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/health") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            status: "UP",
            service: "devops-sample-backend"
        }));

        return;
    }

    if (req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            message: "DevOps sample application is running"
        }));

        return;
    }

    res.writeHead(404, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
        error: "Not Found"
    }));
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = server;