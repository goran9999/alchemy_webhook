import { Alchemy, Network } from "alchemy-sdk";
import express from "express";

export const updateRouter = express.Router();

updateRouter.get("/add_address/:address", async (req, res) => {
  const address = req.params.address;

  const alchemy = new Alchemy({
    network: Network.ETH_MAINNET,
    authToken: process.env.ALCHEMY_TOKEN!,
  });

  await alchemy.notify.updateWebhook("wh_tic4a9sqmvclowjs", {
    addAddresses: [address],
  });

  return res.status(200).json({ address });
});
