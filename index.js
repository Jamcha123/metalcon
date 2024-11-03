import express from 'express';
import http from 'http';
import axios from 'axios'
import {Server} from 'socket.io'
import fs from 'fs'

const link = "https://api.metalpriceapi.com/v1/latest?api_key=0d9c48bd888d9b9baf10b0a59a2e083f&base=USD&currencies=EUR,XAU,XAG"

const app = express()
app.use(express.static("public"))

app.get("/:file", (req, res) => {
    const {file} = req.params; 
    fs.readFile(file, (err, data) => {
        if(err){
            res.writeHead(404, {'content-type': "text/html"}); 
            return res.end("404, not found"); 
        }
        res.writeHead(200, {'content-type': "text/html"}); 
        res.write(data); 
        res.end()
    }) 
})
const server = http.createServer(app)

const io = new Server(server)
io.on("connection", (socket) => {
    console.log("hello world"); 
})
server.listen(8080, () => {console.log("http://127.0.0.1:8080/index.html")});