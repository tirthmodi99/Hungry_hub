import { Router,Response } from 'express';
import { sample_restaurant } from '../datars';
import asyncHandler from 'express-async-handler';
import { RestaurantModel } from '../models/restaurant.model';
const router = Router();

router.get('/seed',asyncHandler(async (req, res) => {
    const restaurantsCount = await RestaurantModel.countDocuments();
    if (restaurantsCount > 0) {
      res.send('Seed is already done!');
      return;
    }

    await RestaurantModel.create(sample_restaurant);
    res.send('Seed Is Done!');
  })
);

router.get('/',asyncHandler(async (req, res) => {
    const restaurants = await RestaurantModel.find();
    res.send(restaurants);
  })
);

// router.get(
//   '/search/:searchTerm',
//   asyncHandler(async (req, res) => {
//     const searchRegex = new RegExp(req.params.searchTerm, 'i');
//     const restaurants = await RestaurantModel.find({ name: { $regex: searchRegex } });
//     res.send(restaurants);
//   })
// );

// router.get(
//   '/tags',
//   asyncHandler(async (req, res) => {
//     const tags = await RestaurantModel.aggregate([
//       {
//         $unwind: '$tags',
//       },
//       {
//         $group: {
//           _id: '$tags',
//           count: { $sum: 1 },
//         },
//       },
//       {
//         $project: {
//           _id: 0,
//           name: '$_id',
//           count: '$count',
//         },
//       },
//     ]).sort({ count: -1 });

//     const all = {
//       name: 'All',
//       count: await RestaurantModel.countDocuments(),
//     };

//     tags.unshift(all);
//     res.send(tags);
//   })
// );

// router.get(
//   '/tag/:tagName',
//   asyncHandler(async (req, res) => {
//     const restaurants = await RestaurantModel.find({ tags: req.params.tagName });
//     res.send(restaurants);
//   })
// );

router.get(
  '/:rstId',
  asyncHandler(async (req, res) => {
    const restaurants = await RestaurantModel.findById(req.params.restaurantId);
    res.send(restaurants);
  })
);

export default router;
