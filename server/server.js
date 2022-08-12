const express = require('express')
const app = express()

app.get("/api",(req, res) => {
    res.json({"pets":[ "Kyser", "Manchas", "Tyson", "Negrita"]})
})


app.listen(5000, () => console.log("server started on 5000 port"))