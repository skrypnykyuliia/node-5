const http = require("http");
const server = http.createServer((req, res) => {
  if (!req.headers.authorization) {
    res.writeHead(401, { "Content-Type": "text/plain" });
    res.end("Unauthorized");
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Authorization header received");
  }
});

server.listen(3000, () => {
  console.log("Сервер запущен на порту 3000");
});

