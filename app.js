const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "/build")));

const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.sendFile("/index.html"));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
