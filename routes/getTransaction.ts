import express from "express";
import { ethers } from "ethers";
import { Alchemy, Network } from "alchemy-sdk";
export const getTransaction = express.Router();

getTransaction.get("/:hash", async (req, res) => {
  const hash = req.params.hash;

  const ethersProvider = new ethers.JsonRpcProvider("");

  const alchemy = new Alchemy({
    network: Network.ETH_MAINNET,
    authToken: process.env.ALCHEMY_TOKEN!,
  });

  const transaction = await alchemy.transact.getTransaction(hash);

  console.log(JSON.stringify(transaction));

  return res.status(200).json({ parsed: "stigal" });
});
