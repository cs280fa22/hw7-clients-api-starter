import express from "express";
import clients from "./routes/clients.js";
import register from "./routes/register.js";
import { index } from "./views/pages.js";

const app = express();

// You need this to parse submitted form data!
app.use(express.urlencoded({ extended: false }));

app.get("/", (_req, res) => {
  res.send(index());
});

app.use(register);
app.use(clients);

export default app;
