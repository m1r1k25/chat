import express from 'express'
import { Server } from "socket.io"
import dotenv from 'dotenv'
import http from 'http'
import cors from 'cors'

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()
const httpServer = http.Server(app)
const io = new Server(httpServer);

app.use(express.json())
app.use(cors())

const rooms = new Map();

app.get('rooms', (req, res) => {
  res.json(rooms)
})

io.on('connection', (socket) => {
  console.log('user connected', socket.id)
})

const start = () => {
  try {
    httpServer.listen(PORT, () => {console.log(`Server has started on ${PORT} port`)})
  } catch(e) {
    console.log(e)
  }
}

start()

 