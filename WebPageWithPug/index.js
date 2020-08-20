//index.js

/*
 *RequierExternalModules
 */

const express = require("express");
const path = require("path");
/**
 *App Configuration
 */
const app = express();
const port = process.env.PORT || "8000";

//confugirationPUG
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
/**

*Routes Definations
 */
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});
/**
 *Server Activation
 */
app.listen(port, () => {
  console.log(`Listening to request on port(8000):`);
});
