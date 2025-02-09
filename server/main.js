const express = require("express")
const app = express()

const PORT = 5000

app.get("/", (req, res) => {
    res.send("Hello fron express ")
})

app.listen(PORT, () => {
    console.log(">> Express app is running on port " + PORT)
})