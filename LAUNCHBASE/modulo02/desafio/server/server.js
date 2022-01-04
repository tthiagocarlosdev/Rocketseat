const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const texts = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server
})

server.get("/", function(req, res){
  return res.render("layout")
})

server.get("/about", function(req, res){
  return res.render("about")
})

server.get("/sobre", function(req, res){
  const sobre = {
    avatar_url: "https://avatars.githubusercontent.com/u/28929274?s=200&v=4",
    title: "Rocketseat",
    description: "A Rocketseat é uma empresa que busca capacitar pessoas que buscam se profissionalizar na programação independente do seu momento ou nível de conhecimento.",
    listTechnologies: [
      {name: "HTML"},
      {name: "CSS"},
      {name: "JavaScript"},
      {name: "Node.js"},
      {name: "Git"},
      {name: "GitHub"}
    ],
    bottomSocialMedia: [
      {name: "Facebook", url: "https://www.facebook.com/rocketseat/"},
      {name: "GitHub", url: "https://github.com/rocketseat"},
      {name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/"}
    ]
  }
  return res.render("sobre", {sobre})
})

server.get("/conteudo", function(req, res){
  return res.render("conteudo")
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});

server.listen(5000, function(){
  console.log("server is running")
})

