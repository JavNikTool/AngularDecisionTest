import {Router} from "express";
import data from "./fakeData.js";
const router = new Router();




router.post("/data", (req, res) => {
  data.push(req.body);
  res.send("Data received");
});


router.get('/get', (req, res) => {
  try {
    res.status(200).send(data).json();
  }catch (e){
    res.status(500).send(e)
  }
});

export default router;
