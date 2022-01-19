// create
exports.post = function (req, res) {
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

}

// update

// delete