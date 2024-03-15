const express = require("express");
const FoodRouter = express.Router();
const {
  getAll,
  getAllFoodBySearchTerm,
  getAllTags,
  getAllFoodByTag,
  getFoodById,
} = require("../Controller/food.controller");

// GET all foods from the database
FoodRouter.get("/", getAll);

// GET all foods by search term
FoodRouter.get("/search/:searchTerm", getAllFoodBySearchTerm);

// GET all tags for foods
FoodRouter.get("/tags", getAllTags);

// GET all foods by tag
FoodRouter.get("/tag/:tag", getAllFoodByTag);

// GET a specific food by ID from the database
FoodRouter.get("/:id", getFoodById);

module.exports = {
  FoodRouter,
};
router.get('', (req, res) => {
  res.send('Hello, this is an example route!');
});

module.exports = router;