const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req);
  res.write("<h1>Ankur Kumar</h1>");
  res.end();
});
server.listen(4000);
