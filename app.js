const express = require("express")
const app = express()
const port = 3000

const posts = [
    {
        title: "Primo post",
        content: "Questo è il contenuto del primo post.",
        image: "./public/images/ciambellone.jpeg",
        tags: ["first", "blog"]
    },
    {
        title: "Secondo post",
        content: "Questo è il contenuto del secondo post",
        image: "./public/images/cracker_barbabietola.jpeg",
        tags: ["second", "blog"]
    },
    {
        title: "Terzo post",
        content: "Questo è il contenuto del terzo post",
        image: "./public/images/pane_fritto_dolce.jpeg",
        tags: ["third", "blog"]
    },
    {
        title: "Quarto post",
        content: "Questo è il contenuto del quarto post",
        image: "./public/images/pasta_barbabietola.jpeg",
        tags: ["fourth", "blog"]
    },
    {
        title: "Quinto post",
        content: "Questo è il contenuto del quinto post",
        image: "./public/images/torta_paesana.jpeg",
        tags: ["fifth", "blog"]
    }]

app.get("/", (req, res) => {
    res.send("Server del mio blog")
})

app.get("/bacheca", (req, res) => {
    res.json(posts)
})

app.use(express.static("public/images"))

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})