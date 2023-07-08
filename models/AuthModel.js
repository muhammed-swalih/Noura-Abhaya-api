import mongoose from "mongoose";
const {Schema} = mongoose

const AuthSchema = new Schema({
    firstName : {
        type : String,
        required: true,
        unique : true
    },
    lastName : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password: {
        type : String,
        required: true
    }
})

export default mongoose.model("AuthModel",AuthSchema);