const express = require("express");
const app = express();
const morgan = require("morgan");

app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
// middleware
app.use((req, res, next) => {
  console.log("this is middleware");
  next();
});

app.post("/get-form-data", (req, res) => {
  console.log(req.body);
  res.send("data received");
});
// app.get("/get-form-data",(req,res)=>{
//     console.log(req.query)
//     res.send('data received')
// })

app.get(
  "/",
  (req, res, next) => {
    const a = 4 + 4;
    console.log(a);
    next();
  },
  (req, res) => {
    res.render("index");
  }
);
app.get("/favicon.ico", (req, res) => res.status(204).end());

app.get("/about", (req, res) => {
  res.send("/about page");
});

app.listen(5000);
