import fs from "fs"
import http from "http"
fs.writeFileSync("fisrt.txt", "Hello Students")
console.log("hello world")
const server = http.createServer((req, res) => {
    res.end("hello from server")
})

server.listen(804, () => {
    console.log("this is http server checking code")
})