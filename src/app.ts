import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.send("Hello World");
});

app.get("/dashboard", (req, res) => {
  res.send("aqui podemos ver el dashboard de pantalla");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
