const path        = require('path')
const express     = require('express')
const bodyParser  = require('body-parser')
const app         = express()
const PORT        = process.env.PORT || 6000

app.use(bodyParser.json({extended: false}))

app.put("/hooks",function(req,res){
  res.statusCode=200
  console.log("I've got a hook event and I will do something with it: \n\n ",req.body)
  res.send('{ "message": "Accepted" }')
})
app.listen(PORT,function(req,res){
  // logger.info("Server listening on port:  ", PORT)
  console.log("Server listening on port:  ", PORT)
})