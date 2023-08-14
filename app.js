const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><h1>Enter message</h1></head>");
    //without this name parameter in the input the code wont work
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunks) => {
      console.log(chunks);
      body.push(chunks);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      fs.writeFile("messages.txt", parsedBody.split("=")[1], (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<header><h1>Ravindu</h1></header>");
  res.write("</html>");
  return res.end();
});

server.listen(3000);
