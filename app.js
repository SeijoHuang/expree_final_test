const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const { listen } = require('express/lib/application')
const port = 3000

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


app.get('/',(req, res) => {
  res.render('index')
})
app.get('/about', (req, res) => {
  
})
app.get('/portfolio', (req, res) => {
  
})
app.get('/contact', (req, res) => {
  
})

app.listen(port, () => {
  console.log(`this server is listening on http://localhost${port}`)
})
