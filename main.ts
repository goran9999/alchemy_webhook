import Express from "express";
import bodyParser from "body-parser";
import { createWebhook } from "./routes/createWebhook";
import { receiveData } from "./routes/receiveData";
const app = Express();

app.use(bodyParser.json());

app.get("/webhook", createWebhook);

app.post("/process", receiveData);

app.use((err, req, res) => {
  console.log("Not found");
});

app.listen(Number(process.env.PORT), async () => {
  console.log("Server listening...");
});
