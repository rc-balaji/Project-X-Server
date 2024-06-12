const db = require("mongoose");
const express = require("express");
const cors = require("cors");
const router = require("./router/router");

const uri =
  "mongodb+srv://rcbalaji:07070707@cluster0.bbw2v33.mongodb.net/HealthEats?retryWrites=true&w=majority&appName=Cluster0";


const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

db.connect(`${uri}`)
  .then(() => {
    console.log("Mongo Connencted");
  })
  .catch((err) => console.error(err));
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
