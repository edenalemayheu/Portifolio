const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let myName = "Eden Alemayehu";

app.get("/name", (req, res) => {
    res.json({
        name: myName
    });
});

app.post("/name", (req, res) => {
    myName = req.body.name;

    res.json({
        message: "Updated Successfully"
    });
});

app.listen(3000, () => {
    console.log("Server Running...");
});