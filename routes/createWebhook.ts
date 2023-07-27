import { Router } from "express";
import { Alchemy, Network, WebhookType } from "alchemy-sdk";
export const createWebhook = Router();

createWebhook.get("/create", async (req, res) => {
  const alchemy = new Alchemy({
    authToken: process.env.ALCHEMY_TOKEN!,
    network: Network.ETH_MAINNET,
  });

  //   const createWh = await alchemy.notify.createWebhook(
  //     "https://dashboard.alchemy.com/api/create-webhook",
  //     WebhookType.ADDRESS_ACTIVITY,
  //     {
  //       addresses: [],
  //       network: Network.ETH_MAINNET,
  //       {webhookUrl:""}
  //     }
  //   );
});
