import moongoose from "moongoose";

const orderItemSchema = new moongoose.Schema({
    productId:{
        type: moongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true,
    }
})

const orderSchema = new moongoose.Schema({
    orderPrice:{
        type:Number,
        required:true,
    },
    customer:{
        type:moongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        type: [orderItemSchema]
    },
    address:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING"
    }
})

export const Order = moongoose.model("Order",orderSchema)