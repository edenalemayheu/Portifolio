require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: true,
    legacyHeaders: false
});

app.use(limiter);

let myName = "Eden Alemayehu";

app.get("/name", (req, res) => {
    res.json({
        name: myName
    });
});

app.post("/name", (req, res) => {
    myName = req.body.name;

    res.json({
        message: "Updated Successfully",
        name: myName
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});