//custom response
const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head>");
  res.write("<title>");
  res.write("Hello World");
  res.write("</title>");
  res.write("</head>");
  if (req.url === "/home") {
    res.write("<body><h1>Welcome to Home</h1></body>");
  } else if (req.url === "/about") {
    res.write("<body><h1>Welcome to About</h1></body>");
  } else if (req.url === "/node") {
    res.write("<body><h1>Welcome to Node</h1></body>");
   
  }
  res.write('</html>');
  res.end();
  process.exit();

});
server.listen(8080);
