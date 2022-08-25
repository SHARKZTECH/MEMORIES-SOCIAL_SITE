import moongose from "mongoose";

const userShema=new moongose.Schema({
    name:{
        type:String,
        required:true,
        min:1,
        max:255
    },
    email:{
        type:String,
        required:true,
        max:255,
        min:4
    },
    password:{
        type:String,
        required:true,
        max:1024,
        min:6
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const User=moongose.model("User",userShema);
export default User;