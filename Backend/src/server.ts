import express from "express";
import cors from "cors";
import { sample_foods, sample_tags, sample_users } from "./data";
import jwt from "jsonwebtoken"

const app = express();
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));

app.get("/api/foods", (req, res) => {
    res.send(sample_foods)
})
//get food
app.get("/api/foods/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const foods = sample_foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
    res.send(foods)
})
//get food by All tags
app.get("/api/foods/tags", (req, res) => {
    res.send(sample_tags)
})

//get food by special tags
app.get("/api/foods/tag/:tagName", (req, res) => {
    const tagName = req.params.tagName;
    const foods = sample_foods.filter(food => food.tags?.includes(tagName));
    res.send(foods)
})
//get Food by ID
app.get("/api/foods/:foodId", (req, res) => {
    const foodId = req.params.foodId;
    const food = sample_foods.find(food => food.id == foodId);
    res.send(food)
})

//login api
app.post("/api/user/login",(req, res)=>{
    const {email, password} =req.body;
    const user = sample_users.find(user => user.email === email && user.password === password);

if(user){
    res.send(genrateTokenResponse(user));
}else{
    res.status(400).send("User name or password is not valid!")
}
})

const genrateTokenResponse = (user:any)=>{
const token = jwt.sign({
email:user.email, isAdmin:user.isAdmin
},"HungryHub",{
expiresIn:"30d"
});
user.token = token;
return user;
}

const port = 5000;
app.listen(port, () => {
    console.log("Website is Runing on http://localhost: " + port)
})