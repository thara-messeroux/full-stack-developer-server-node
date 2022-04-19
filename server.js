import express from 'express'
import cors from 'cors';
// import tuitsController
//   from "./tuits/tuits-controller.js";
// load the mongoose library
// connect to the webdev database


import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import mongoose from "mongoose";

const User = require('./models/user_model')
const DB_CONNECTION_STRING = 'mongodb+srv://tharamesseroux:braTtitude17*@cluster0.xssrp.mongodb.net/webdev?retryWrites=true&w=majority';
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/webdev'
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(express.json());
app.use(cors());
helloController(app);
userController(app);
tuitsController(app);

app.get('/', (req,res) => {
  res.send("Welcome to backend development")
})
// asynchronous
app.post('/api/register', async (req, res) => {
  try{
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    res.send(user)
  }
    catch(e){
      res.status(400).send(e)
    }
})

app.listen(process.env.PORT || 4000, () => {
  console.log("Welcome to backend development");
});


// import controller
// pass it app