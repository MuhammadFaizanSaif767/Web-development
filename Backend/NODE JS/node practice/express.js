import express from "express"
const app = express()
app.get("/", (req, res) => {
    res.send("on first page")
})
app.get("/teacher", (req, res) => {
    res.send("on teachers page")
})
app.get("/student", (req, res) => {
    res.send("on students page")
})


app.listen(3000)