import express from "express"
const app = express()
app.get("/", (req, res) => {
    res.send("HELLO FROM EXPRESS")
})
app.get("/2", (req, res) => {
    res.send("HELLO FROM EXPRESS to /2")
})
app.get("/1", (req, res) => {
    res.send("HELLO FROM EXPRESS to /1")
})



app.listen(3000, () => { console.log("Express server is running") })