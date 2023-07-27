import express from "express";

export const receiveData = express.Router();

receiveData.post("/receive", async (req, res) => {
  console.log(req.body);
});
