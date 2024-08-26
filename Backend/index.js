const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5173",
  })
);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.listen(3000, console.log("app is running on port" + port));
