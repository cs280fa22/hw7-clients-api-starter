import app from "./src/index.js";

const PORT = 5050;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
