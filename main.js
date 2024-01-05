const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //res.send("welcome");
  const { name, age } = req.query;
  res.send(`${name},${age}`);
});

app.use(express.json());
app.post("/contact", (req, res) => {
  //res.send("welcome");
  const { name, phone, email } = req.body;
  if (!name) {
    res.status(422).json({
      message: `name missing`,
    });
  }
  res.status(200).json({
    message: `contact details for ${name} received as ${phone} and ${email}`,
  });
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});
