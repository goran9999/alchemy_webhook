import Express from "express";
import bodyParser from "body-parser";
import { createWebhook } from "./routes/createWebhook";
import { receiveData } from "./routes/receiveData";
import express from "express";
import cors from "cors";
const app = Express();

app.use(bodyParser.json());

app.get("/webhook", createWebhook);

app.post("/process", receiveData);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(express.json());
app.use(cors());

app.use((err, req, res) => {
  console.log("Not found");
});

app.listen(Number(process.env.PORT), async () => {
  console.log("Server listening...");
});
