const express = require("express");
const app = express();
  
app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
});

  
app.listen(5000, console.log(`Server started on port `));