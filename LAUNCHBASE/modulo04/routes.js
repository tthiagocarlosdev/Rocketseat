const express = require('express')
const routes = express.Router()

routes.get('/', function (req, res) {
  return res.redirect("/instructors")
})

routes.get('/instructors', function (req, res) {
  return res.render("instructors/index")
})

routes.get('/instructors/create', function (req, res) {
  return res.render("instructors/create")
})

routes.post('/instructors', function (req, res) {
  // req.query
  // req.body
  //{"avatar_url":"http://thiagocarlos.silva.com","name":"Thiago Carlos","birth":"2000-01-19","gender":"M","services":"Musculação, crossfit"}zzzzzzzzzzzzzzzzzzzzzzzzzzzz
  
  // keys
  //["avatar_url","name","birth","gender","services"]
  
  const keys = Object.keys(req.body)
  for(key of keys) {
    // req.body.key = ""
    if(req.body[key] == "") {
      return res.send('Please, fill all fields!')
    }

  }

  return res.send(req.body)

})

routes.get('/members', function (req, res) {
  return res.send("members")
})

module.exports = routes