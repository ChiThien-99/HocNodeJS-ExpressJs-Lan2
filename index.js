const express = require("express");
const app = express();
const port = 3000;
const productsRouter = require("./modules/products/products.router");
const bodyParser = require("body-parser");
const connectDB = require("./database");
connectDB();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", productsRouter);
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.listen(port, () => {
  console.log(`Server connecting http://localhost:${port}`);
});
