import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;
const connectionUrl =
  "mongodb+srv://togrul:togrul@firstcluster.udpwqcz.mongodb.net/";

const Schema = mongoose.Schema;

const ITServiceSchema = new Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
});

const Services = mongoose.model("ITLock", ITServiceSchema);

app.get('/favicon.ico', (req, res) => res.status(204));

app.get("/", async (req, res) => {
  try {
    const allServices = await Services.find({});
  res.send(allServices);
  } catch (error) {
    console.log(error);
  }
});

app.get("/:id", async (req, res) => {
 try {
    const { id } = req.params;
    const service = await Services.findById(id);
    res.send(service);
 } catch (error) {
    console.log(error);
 }
});

app.post("/", async (req, res) => {
  try {
    const newService = new Services(req.body);
  await newService.save();
  res.send("Service Created!");
  } catch (error) {
    console.log(error);
  }
});

app.delete("/:id", async (req, res) => {
    try {
    const { id } = req.params;
    const service = await Services.findByIdAndDelete(id);
    res.status(200).send("Service Deleted!");
    } catch (error) {
        res.status(500).send("Service Deleted!"); 
    }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose.connect(connectionUrl).then(() => console.log("Connected!"));
