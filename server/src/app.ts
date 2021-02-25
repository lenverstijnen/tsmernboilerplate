import express from "express"
const app = express()

app.get("/", (req, res) => res.send("Hello World"))

app.listen(3001, () => console.log("App listens on port 3001"))
