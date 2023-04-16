import express from 'express';
import router from "./routers.js";
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/*app.use(express.json())*/
app.use('/api', router);



const port = process.env.PORT || 4300;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
