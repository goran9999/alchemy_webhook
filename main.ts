import Express from "express";
import bodyParser from "body-parser";
import { createWebhook } from "./routes/createWebhook";
import { receiveData } from "./routes/receiveData";
const app = Express();

app.use(bodyParser.json());

app.get("/webhook", createWebhook);

app.post("/process", receiveData);

app.listen(process.env.PORT, async () => {
  console.log("Server listening...");
});
