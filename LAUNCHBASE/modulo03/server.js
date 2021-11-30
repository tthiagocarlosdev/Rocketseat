const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.get("/", function(req, res){
  const about = {
    avatar_url: "https://avatars.githubusercontent.com/u/76978748?v=4",
    name:"Thiago Carlos",
    role: "Estudante da Rocketseat",
    description: 'Aluno de desenvolvimento front-end, focado em aprender programação web na escola <a href="https://www.rocketseat.com.br/" target="_blank">Rocketseat',
    links:[
      { name: "GitHub", url: "https://github.com/tthiagocarlosdev" },
      { name: "Youtube", url: "https://www.youtube.com/channel/UCZN-uQtc4UDQt_tLu-I7Wpw" },
      { name: "Instagram", url: "https://www.instagram.com/tthiagocarlos.dev/" }
    ]
  }
  return res.render("about", {about})
})

server.get("/portifolio", function(req, res){

  return res.render("portifolio", {items: videos})
})

server.listen(5000, function() {
  console.log("server is running")
})

