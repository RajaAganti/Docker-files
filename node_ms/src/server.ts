const express = require("express");

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.get("/", (_req, res) => {
  res.json({ message: "Hello from Docker!" });
});

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "healthy" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Listening on ${PORT}`);
});
