import {Router} from "express";
import data from "./fakeData.js";
const router = new Router();




router.post("/post", (req, res) => {
  data.push(req.body);
  res.send("Data received");

});


router.get('/get', (req, res) => {
  try {
    res.status(200).send(data);
  }catch (e){
    res.status(500).send(e)
  }
});

router.put('/put', (req,res) => {
  try {
    res.send(data);
  } catch (e) {
    res.status(500).send(e)
  }
})
router.get('/get/:id', (req, res) => {
  try {
    const id = req.params.id;
    res.send(data[id - 1]);
  } catch (e) {
    res.status(500).send(e)
  }
});

export default router;
