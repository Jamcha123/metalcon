import express from 'express';
import fs from 'fs'

const app = express()
app.use(express.static("public"));

app.get("/:file", (req, res) => {
    const {file} = req.params; 
    fs.readFile(file, (err, data) => {
        if(err){
            res.writeHead(404, {"content-type": "text/html"}); 
            return res.end("404, not found"); 
        }
        res.writeHead(200, {"content-type": "text/html"}); 
        res.write(data); 
        res.end(); 
    })
})
app.listen(8080, () => {console.log("http://127.0.0.1:8080/index.html")});