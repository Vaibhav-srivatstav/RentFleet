import mongoose from "mongoose";
import validator from "validator";

 const userSchema = new mongoose.Schema ({
    name:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
        unique:true,
        validate: {
        validator: validator.isEmail,
        message: "Invalid email format"
      }
    },
    password:{
        type: String,
        required:true,
    }
 }, {
    timestamps:true,
 });

 const userModel = mongoose.models.user || mongoose.model('User', userSchema);
 export default userModel;