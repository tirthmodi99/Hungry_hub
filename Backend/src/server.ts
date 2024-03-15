// import express from "express";
// import cors from "cors";
// import jwt from "jsonwebtoken"
// import { sample_foods, sample_tags, sample_users } from "./data";
// import { sample_restaurant } from "./datars";
// // import "dotenv/config";
// // import mongoose from "mongoose"

// // mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=> console.log("Connected to Database!"));

// // import {  sample_restaurant, sample_restaurants, sample_rstags } from "./datars";
// const app = express();
// // const Razorpay = require("razorpay");
// app.use(express.json())

// app.use(cors({
//     credentials: true,
//     origin: ["http://localhost:4200"]   
// }));

// // var instance =new Razorpay({
// //     key_id:"rzp_test_j0uWKk8zR3QVul",
// //     key_secret : "EhaGIDCIjWv8y8e6JuKsM9U3",
// // });
// app.get("/api/foods", (req, res) => {
//     res.send(sample_foods)
// })
// //get food
// app.get("/api/foods/search/:searchTerm", (req, res) => {
//     const searchTerm = req.params.searchTerm;
//     const foods = sample_foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
//     res.send(foods)
// })
// //get food by All tags
// app.get("/api/foods/tags", (req, res) => {
//     res.send(sample_tags)
// })

// //get food by special tags
// app.get("/api/foods/tag/:tagName", (req, res) => {
//     const tagName = req.params.tagName;
//     const foods = sample_foods.filter(food => food.tags?.includes(tagName));
//     res.send(foods)
// })
// //get Food by ID
// app.get("/api/foods/:foodId", (req, res) => {
//     const foodId = req.params.foodId;
//     const food = sample_foods.find(food => food.id == foodId);
//     res.send(food)
// })

// // app.get("/api/restaurant", (req, res) => {
// //     res.send(sample_restaurant)
// // })

// // //get restaurants by ID
// // app.get("/api/restaurant/:rstId", (req, res) => {
// //     const rstId = req.params.rstId;
// //     const restaurant = sample_restaurant.find(restaurants => restaurants.rstid === rstId);
// //     res.send(restaurant)
// // })

// app.get("/api/restaurant", (req, res) => {
//     res.send(sample_restaurant)
// })

// app.get("/api/restaurant/search/:searchTerm", (req, res) => {
//     const searchTerm = req.params.searchTerm;
//     const restaurant = sample_restaurant.filter(restaurants => restaurants.name.toLowerCase().includes(searchTerm.toLowerCase()))
//     res.send(sample_restaurant)
// })

// //get food by All tags
// app.get("/api/restaurant/rstags", (req, res) => {
//     res.send(sample_tags)
// })

// //get food by special tags
// app.get("/api/restaurant/rstag/:tagName", (req, res) => {
//     const tagName = req.params.tagName;
//     const restaurant = sample_restaurant.filter(restaurant => restaurant.tags?.includes(tagName));
//     res.send(restaurant)
// })

// //get restaurants by ID
// app.get("/api/restaurant/:rstId", (req, res) => {
//     const rstId = req.params.rstId;
//     const restaurant = sample_restaurant.find(restaurants => restaurants.rstid === rstId);
//     res.send(restaurant)
// })


// //login api
// app.post("/api/user/login",(req, res)=>{
//     const {email, password} =req.body;
//     const user = sample_users.find(user => user.email === email && user.password === password);

// if(user){
//     res.send(genrateTokenResponse(user));
// }else{
//     res.status(400).send("User name or password is not valid!")
// }
// })

// // app.post("/api/checkout", async (req, res) => {
// //     const amount = req.body.amount; // Get the total amount to be charged

// //     const options = {
// //         amount: amount * 100, // amount in paise
// //         currency: "INR",
// //         receipt: "order_receipt_" + Date.now(),
// //         payment_capture: 1,
// //     };

// //     try {
// //         const response = await instance.orders.create(options);
// //         res.json(response);
// //     } catch (error) {
// //         console.error("Error creating Razorpay order:", error);
// //         res.status(500).send("Error creating Razorpay order");
// //     }
// // });




// const genrateTokenResponse = (user:any)=>{
// const token = jwt.sign({
// email:user.email, isAdmin:user.isAdmin
// },"HungryHub",{
// expiresIn:"30d"
// });
// user.token = token;
// return user;
// }

// const port = 5000;
// app.listen(port, () => {
//     console.log("Website is Runing on http://localhost: " + port)
// })






// import dotenv from 'dotenv';
// dotenv.config();
// import path from 'path';
// import express from "express";
// import cors from "cors";
// import foodRouter from './routers/food.router';
// import userRouter from './routers/user.router';
// import restaurantRouter from './routers/restaurant.router';
// // import orderRouter from './routers/order.router';
// import { dbConnect } from './config/database.config';
// dbConnect();

// const app = express();
// app.use(express.json());
// app.use(cors({
//     credentials:true,
//     origin:["http://localhost:4200"]
// }));

// app.use("/api/foods", foodRouter);
// app.use("/api/users", userRouter);
// // app.use("/api/orders", orderRouter);
// app.use("/api/restaurants, restauratRouter");

// app.use(express.static('public'));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname,'public', 'index.html'))
// })

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//     console.log("Website served on http://localhost:" + port);
// })





import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express from "express";
import cors from "cors";
import foodRouter from './routers/food.router';
import userRouter from './routers/user.router';
import restaurantRouter from './routers/restaurant.router';
// import orderRouter from './routers/order.router';
import { dbConnect } from './config/database.config';
// import authenticationMiddleware from './middlewares/auth.mid'; // Update the path

dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

// app.use(authenticationMiddleware); // Use the authentication middleware before any routes

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
// app.use("/api/orders", orderRouter);
app.use("/api/restaurants", restaurantRouter); // Correct the typo here

app.use(express.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'public', 'index.html'))
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})