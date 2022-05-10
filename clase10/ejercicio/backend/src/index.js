import express from 'express'
const app = express()
const port = 3001

// simulo una base de datos



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})