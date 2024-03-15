
const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    favorite: { type: Boolean, required: true },
    stars: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    foodschema: [foodSchema],
  });
  
  const RestaurantModel = mongoose.model("restaurants", restaurantSchema);
  
  module.exports = {
    RestaurantModel,
  };
  