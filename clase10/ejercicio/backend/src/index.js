import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3001

// simulo una base de datos en memoria
// vendecores
const lista = [{codigo:100,nombre:"Maria"},{codigo:101,nombre:"Juan"}];

app.get('/api/lista', (req,res) => {
  // CONSULTA A BASE DE DATOS
  res.json(lista);
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})