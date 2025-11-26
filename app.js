const express = require("express")
const app = express()
const port = 3000

const posts = [
    {
        title: "Primo post",
        content: "Questo è il contenuto del primo post.",
        image: "",
        tags: ["first", "blog"]
    },
    {
        title: "Secondo post",
        content: "Questo è il contenuto del secondo post",
        image: "",
        tags: ["second", "blog"]
    },
    {
        title: "Terzo post",
        content: "Questo è il contenuto del terzo post",
        image: "",
        tags: ["third", "blog"]
    },
    {
        title: "Quarto post",
        content: "Questo è il contenuto del quarto post",
        image: "",
        tags: ["fourth", "blog"]
    },
    {
        title: "Quinto post",
        content: "Questo è il contenuto del quinto post",
        image: "",
        tags: ["fifth", "blog"]
    }]

app.get("/", (req, res) => {
    res.send("Server del mio blog")
})

app.get("/bacheca", (req, res) => {
    res.json(posts)
})

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})