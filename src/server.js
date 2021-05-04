import express from "express";
import app from "./app";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const porta = process.env.PORT || 5556;

app.listen(porta);
