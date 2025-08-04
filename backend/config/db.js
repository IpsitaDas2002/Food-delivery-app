import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Ipsitadas:789456123@cluster0.hocoela.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
