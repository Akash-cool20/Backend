import moongoose from "moongoose";

const categorySchema = new moongoose.Schema({
    name:{
        type:String,
        required:true,
    }
},{timestamps:true})

export const Category = moongoose.model("Category",categorySchema)