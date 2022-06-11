const express = require("express");
const path = require("path");
const app = express();
const publictPath = path.join(__dirname, "build");
app.use(express.static(publictPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publictPath, "index.html"));
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`🚀 server started`));
