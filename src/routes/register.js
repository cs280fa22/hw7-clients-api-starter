// Do NOT make any changes to this file!

import express from "express";
import { getKey } from "../util/key.js";
import { sendKey } from "../services/email.js";
import { register, success, error } from "../views/pages.js";
import ClientDao from "../data/ClientDao.js";

export const clients = new ClientDao();
const router = express.Router();

router.get("/register", (_req, res) => {
  res.send(register());
});

router.post("/register", async (req, res) => {
  const { name, email } = req.body;

  try {
    const data = await clients.create({ name, email });
    const key = getKey(data._id);
    sendKey(name, email, key);
    res.send(success(name));
  } catch (err) {
    console.log({ err });
    res.send(error(name, err.message));
  }
});

export default router;
