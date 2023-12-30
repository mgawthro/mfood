import mongoose from "mongoose";

let HallSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nameID: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true,
        max: 100,
        min: 0
    },
    hours: {
        type: Object,
        required: true
    },
    menu: {
        type: Object,
        default: {}
    }
})

 const Hall = mongoose.model("Hall", HallSchema);
 
 export default Hall;