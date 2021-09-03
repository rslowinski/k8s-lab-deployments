const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const appVersion = process.env.APP_VERSION;

app.get("/", (req, res) => {
  res.send("App version: " + appVersion);
});

app.listen(port, () => {
  console.log(`Demo app listening at http://localhost:${port}`);
});
