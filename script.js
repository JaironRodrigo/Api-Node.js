const express = require("express");
// const req = require("express/lib/request");
// const res = require("express/lib/response");
const server = express();

server.get("/", (req, res) => {
  return res.json({ usuario: "Jairon Rodrigo" });
});

server.listen(3000, () => {
  console.log("Server is working...");
});
