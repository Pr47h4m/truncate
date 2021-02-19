const path = require("path");

const express = require("express");

const rootDir = require("./utils/root-dir");
const router = require("./routes/router");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(rootDir, "public")));

app.use(router);

app.listen(9081);
