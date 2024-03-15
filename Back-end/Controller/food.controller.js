const { FoodModel, TagModel } = require("../models/food.model");

// Get all foods
const getAllFoods = async (req, res) => {
  try {
    const foods = await FoodModel.find();
    res.status(200).json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Search food by term
const getAllFoodsBySearchTerm = async (req, res) => {
  const { searchTerm } = req.params;
  try {
    const foods = await FoodModel.find({ $text: { $search: searchTerm } });
    res.status(200).json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all tags
const getAllTags = async (req, res) => {
  try {
    const tags = await TagModel.find();
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get foods by tag
const getAllFoodsByTag = async (req, res) => {
  const { tag } = req.params;
  try {
    const foods = tag === "All" ? await FoodModel.find() : await FoodModel.find({ tags: tag });
    res.status(200).json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get food by ID
const getFoodById = async (req, res) => {
  const { foodId } = req.params;
  try {
    const food = await FoodModel.findById(foodId);
    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }
    res.status(200).json(food);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllFoods,
  getAllFoodsBySearchTerm,
  getAllTags,
  getAllFoodsByTag,
  getFoodById,
};
