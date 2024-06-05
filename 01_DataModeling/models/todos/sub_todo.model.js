import moongoose from "moongoose";

const subTodoSchema = new moongoose.Schema({
    content:{
        type:String,
        required:true
    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy: {
        type: moongoose.Schema.Types.ObjectId,
        ref: "User",
    }
},{timestamps: true})

export const SubTodo = moongoose.model("SubTodo",subTodoSchema)