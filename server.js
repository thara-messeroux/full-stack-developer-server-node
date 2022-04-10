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
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/webdev'
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(express.json());
app.use(cors());
helloController(app);
userController(app);
tuitsController(app);
app.listen(process.env.PORT || 4000);
// import controller
// pass it app