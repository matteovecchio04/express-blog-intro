const express = request("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("Server del mio blog")
})