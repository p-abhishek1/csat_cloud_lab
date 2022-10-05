var express = require('express')

var app = express()

const SERVER_PORT = 3000
const SERVER_HOST = "localhost"

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded()) // for parsing application/x-www-form-urlencoded


//http://localhost:3000/
app.get('/', function (req, res) {
    res.send("<h1>Home Page Enter StudentID /</h1>")
})

//sends student id endpoint route
app.get('/C0827603', function (req, res) {
  res.send("<h1>Abhishek Patangay -C0827603</h1>")
})

app.get('/location', function (req, res) {
  res.send("<h1>Canada</h1>")
})

app.listen(process.env.PORT  || SERVER_PORT, () => {
    console.log(`Server running at http://${SERVER_HOST}:${SERVER_PORT}/`);
})

//http://localhost:3000/profile
app.post('/profile', (req, res) => {
    console.log(req.body)
    res.json(req.body)
  })
  
  //http://localhost:3000/admin
  app.get('/admin', (req, res) => {
    res.send('Admin Homepage')
  })
  
  //http://localhost:3000/user/100
  app.get("/user/:id", (req, res)=> {
        res.send(`User ID: ${req.params.id}`);
      }
  )