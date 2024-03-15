import { Schema, model } from "mongoose";

export interface Restaurant{
    rstid:string;
    name:string;
    favorite:boolean;
    stars: number;
    imageUrl: string;

   
}

export const RestaurantSchema = new Schema<Restaurant>(
    {
        name: {type: String, required:true},
        favorite: {type: Boolean, default:false},
        stars: {type: Number, required:true},
        imageUrl: {type: String, required:true},
        
    },{
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps:true
    }
);

export const RestaurantModel = model<Restaurant>('Restaurant', RestaurantSchema);