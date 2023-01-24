const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Enter Message</title>");
    res.write("</head>");
    res.write("<body>");
    res.write('<form action="/send" method ="POST">');
    res.write('Message: <input type="text" name="message"><br>');
    res.write('<input type="submit" value="Send">');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/send" && method === "POST") {
   const body = [];
   req.on('data', (chunk) => {
    console.log(chunk);
    body.push(chunk)
   });
   req.on('end', () => {
    const parseBody = Buffer.concat(body).toString();
    const message = parseBody.split('=')[1];
    fs.writeFileSync("message.txt", message);

   })


    
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head>");
  res.write("<title>Web Server</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("<h1>Web Server</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});
server.listen(3000);
