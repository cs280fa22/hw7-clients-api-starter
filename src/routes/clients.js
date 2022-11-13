import express from "express";
import ClientDao from "../data/ClientDao.js";
import { clients } from "./register.js";

const router = express.Router();

router.get("/api/clients", async (req, res) => {
  // TODO users must not get the clients data unless
  //  they provide a valid API Key

  const data = await clients.readAll();
  res.json({
    status: 200,
    message: `Successfully retrieved ${data.length} records!`,
    data: data,
  });
});

export default router;
