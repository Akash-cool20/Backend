import moongoose from "moongoose";

const userSchema = new moongoose.Schems({
    username :{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    email :{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true});

export const User = moongoose.model("User",userSchema)