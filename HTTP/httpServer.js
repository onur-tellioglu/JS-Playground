const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the main page!");
  }
  if (req.url === "/about") {
    res.end("Welcome to the about page!");
  }
  res.end(`
  <body style="background-color: black; text-align: center">
    <h1 style="color: white">Ooops!</h1>
    <p style="color: white">The page you looking for does not exists!</p>
    <a href="/" style="color: white"> Return to Home Page </a>
  <body/>
    `);
});

server.listen(5000);
