const mongoose = require("mongoose");

const foodSchema = mongoose.Schema(
  {
    
    name: { type: String, required: true },
    price: { type: Number, required: true },
    favorite: { type: Boolean, required: true },
    stars: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    cookTime: { type: String, required: true },
    Restaurant: { type: String, required: true },
    rstid: { type: String, required: true },
    tags: [String],
    origins: [String],
  },
  {
    versionKey: false,
  }
);

const FoodModel = mongoose.model("foods", foodSchema);

module.exports = {
  FoodModel,
};
