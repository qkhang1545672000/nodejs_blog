const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars"); // ✅ đổi chỗ này

const app = express();

app.use(express.static(path.join(__dirname, "public")));
// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
); // ✅ gọi engine()
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

console.log(path.join(__dirname, "resources", "views"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
