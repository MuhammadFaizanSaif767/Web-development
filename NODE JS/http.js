import http from "http"
const server = http.createServer((req, res) => {
    res.end("server is active")
})


server.listen(4000, () => {
    console.log("HTTP server is runing")
})