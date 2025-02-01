const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log(req);
})
app.listen("5000", () => {
    console.log("listennig on port 5000");
})