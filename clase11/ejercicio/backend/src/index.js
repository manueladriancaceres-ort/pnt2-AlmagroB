import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3001

// sistema prototipo

app.post('/api/login', (req,res) => {

  // simulo traer un usuario de la base de datos
  // este prototipo es monousuario para este ejemplo
  console.log(req.body);
  const usuario = { email : 'test@test.com' , password : '123456'};
  if ( req.body && req.body.email == usuario.email && req.body.password == usuario.password ) {
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }

})


// simulo una base de datos en memoria
// vendedores

const lista = [{codigo:100,nombre:"Maria"},{codigo:101,nombre:"Juan"}];

app.get('/api/lista', (req,res) => {
  // CONSULTA A BASE DE DATOS
  res.json(lista);
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/setvendedor', (req,res) => {
  req.body.codigo = Number(req.body.codigo)
  lista.push(req.body);
})

app.delete('/api/vendedor/:codigo', (req,res) => {
  const listaCodigos = lista.map( e => { return e.codigo } )
  const indice = listaCodigos.indexOf(Number(req.params.codigo))
  lista.splice(indice,1);
})

app.post('/api/setvendedor', (req,res) => {
  // revisar
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})