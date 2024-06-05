import moongoose from "moongoose";

const productSchema = new moongoose.Schema({
    description:{
        type:String,
        required:true,
    },
    name:{
        required:true,
        type:String,
    },
    productImage:{
        type:String,
    },
    price :{
        type:Number,
        default:0,
    },
    stock:{
        type:String,
        default:0
    },
    category:{
        type:moongoose.Schema.Types.ObejctId,
        ref:"Category",
        required:true,
    },
    owner:{
        type:moongoose.Schema.Types.ObejctId,
        ref:"User"
    }
},{timestamps:true})

export const Product = moongoose.model("Product",productSchema)