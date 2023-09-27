const express = require("express");
const path = require("path");
const { MongoClient } = require("mongodb");
const { connectToDatabase } = require("./model/DBConnect");
const AppRoutes = require("./routes");

const app = express();
let http = require("http").createServer(app);
let io = require("socket.io")(http);
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); // Parse JSON data in the request body

app.use("/api", AppRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

io.on("connection", (socket) => {
  console.log("a client has connected");
  socket.on("disconnect", () => {
    console.log("a client has disconnected");
  });
  setInterval(() => {
    socket.emit("number", parseInt(Math.random() * 10));
  }, 1000); //in millisecond
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  setInterval(() => {
    socket.emit("number", parseInt(Math.random() * 10));
  }, 1000);
});

http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  // Connect to the database when the server starts
  // connectToDatabase();
});
