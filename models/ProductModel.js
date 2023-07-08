import mongoose, { modelNames } from 'mongoose'
const {Schema} = mongoose

const ProductSchema = new Schema({
    productName : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required: true,
    },
    price : {
        type : Number,
        required : true
    },
    rating : {
        type : Number,
        required : true
    }
})

export default mongoose.model("Products",ProductSchema)