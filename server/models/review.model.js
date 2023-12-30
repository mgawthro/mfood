import mongoose from "mongoose";

let ReviewSchema = new mongoose.Schema({
    dining_hall: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        max: 5,
        min: 1
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true,
        min: 1,
        max: 256
    },
    tags: {
        type: Array,
        default: []
    }
}, {timestamps: true})

 const Review = mongoose.model("Review", ReviewSchema);
 
 export default Review;