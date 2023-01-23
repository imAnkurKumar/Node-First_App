const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head>");
  res.write("<title>Hello World</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("<p>Welcome to my Node Js project</p>");
  res.write("</html>");
  res.end();
});
server.listen(3000);

 


