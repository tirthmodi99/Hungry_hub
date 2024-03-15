// const express = require("express");
// const router = express.Router();
// require("dotenv").config();
// const { connection } = require("./Config/db");
// const { FoodRouter } = require("./Routes/food.routes");
// const app = express();
// app.use(express.json());

// app.use("/foods", FoodRouter);

// // app.use(express.json());


// app.use(cors({
//     credentials: true,
//     origin: ["http://localhost:4200"]   
// }));

// app.listen(process.env.PORT, async () => {
//   try {
//     await connection;
//     console.log("Connected to DB!");
//   } catch (error) {
//     console.log(error);
//     console.log("Not able to connect to DB!");
//   }
//   console.log(`Server running on Port ${process.env.PORT}`);
// });


const express = require("express");
const cors = require("cors");  // Add this line to require the cors middleware
const router = express.Router();
require("dotenv").config();
const { connection } = require("./Config/db");
const { FoodRouter } = require("./Routes/foodroutes");
const app = express();
app.use(express.json());

app.use("/foods", FoodRouter);

const cors = require("cors");
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]   
}));

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB!");
  } catch (error) {
    console.log(error);
    console.log("Not able to connect to DB!");
  }
  console.log(`Server running on Port ${process.env.PORT}`);
});
