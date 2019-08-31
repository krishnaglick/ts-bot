import http from "http";

http
  .createServer((req, res) => {
    res.write("I only exist so heroku doesn't crash!");
    res.end();
  })
  .listen(process.env.PORT || 80);
