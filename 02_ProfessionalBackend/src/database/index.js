import moongoose from "moongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try {
        const connectionInstance = await moongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB Host: `);

    } catch (error) {
        console.log("Mongo DB connection error : ",error);
        process.exit(1)
    }
}

export default connectDB