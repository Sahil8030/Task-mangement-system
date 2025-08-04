import mongoose from "mongoose";
export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://saahilmahajan218:Kti0206@cluster0.dcorobz.mongodb.net/TaskManager')
    .then(() => console .log('DB CONNECTED'));


}
