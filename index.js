const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

let notes = []

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.post('/api/result', (request, response) => {
    const note = request.body
    console.log(note)
  
    response.json(note)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})