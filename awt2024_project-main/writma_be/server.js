import express from 'express';
import { db } from './db/controller/connection.controller.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();


app.get('/', (req, res) => {
  res.send("Hello World. Does it show?")
});

app.listen(process.env.PORT, () => {
  console.log(`Express running on port ${process.env.PORT}`)
})
