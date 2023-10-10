import dotenv from "dotenv";
import express from "express";
import path from "path";

// initialize configuration
dotenv.config();

// port is now available to the node.js runtime
// as if were an environment variable
const port = process.env.SERVER_PORT;

const app = express();


// define a server handler for the default home page
app.get("/", (req, res) => {
    res.status(200).send("Hello world!");
});

// start the express server
app.listen(port, () => {
    // console.log(`server started at http://localhost:${port}`);
});