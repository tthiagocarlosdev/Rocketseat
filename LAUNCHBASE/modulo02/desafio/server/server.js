const express = require('express')
const nunjucks = require('nunjucks')
const server = express()

server.set("view engine", "html")

nunjucks.configure("views", {
  express: server
})

server.listen(5000, function() {
  console.log("server is running")
})

server.get("/", function(req, res){
  return res.render("index")
})