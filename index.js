const db = require("mongoose");
const express = require("express");
const cors = require("cors");
const router = require("./router/router");

const uri =
  "mongodb+srv://rc-balaji:Balaji2003@cluster0.ousbmhk.mongodb.net/HealthEats?retryWrites=true&w=majority";

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
