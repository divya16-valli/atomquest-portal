const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.send("API Running");
});

// REGISTER
app.post("/api/auth/register", async (req, res) => {

    const { name, email, password, role } = req.body;

    try {

        const newUser = new User({
            name,
            email,
            password,
            role
        });

        await newUser.save();

        res.json({
            success: true,
            user: newUser
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// LOGIN
app.post("/api/auth/login", async (req, res) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            });
        }

        if (user.password !== password) {
            return res.status(400).json({
                success: false,
                message: "Wrong password"
            });
        }

        res.json({
            success: true,
            user
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});