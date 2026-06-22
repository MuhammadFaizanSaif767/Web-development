import express from "express"
const app = express()
app.get("/", (req, res) => {
    res.send("HELLO FROM EXPRESS to default page")
})
app.get("/test2/:id", (req, res) => {
    const id = req.params.id
    res.send(`HELLO FROM EXPRESS to ${id}`)
})
app.get("/test3", (req, res) => {
    const id = req.query.id
    const num = ["one", "two", "three"]
    if (id) {
        res.send(`HELLO from ${num[id]}`)
    }
    else {
        res.send("id not pass")
    }

})



app.listen(3000, () => { console.log("Express server is running") })