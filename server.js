import express from 'express'
import { Server } from "socket.io"
import dotenv from 'dotenv'
import http from 'http'

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()
const httpServer = http.Server(app)
const io = new Server(httpServer);


app.use(express.json())

const rooms = new Map();

app.get('rooms', (rew, res) => {
  res.json(rooms)
})

io.on('connection', socket => {
  console.log('user connected', socket)
})

const start = () => {
  try {
    httpServer.listen(PORT, () => console.log(`Server has started on ${PORT} port`))
  } catch(e) {
    console.log(e)
  }
}

start()

 