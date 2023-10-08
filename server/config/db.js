const mongoose = require('mongoose');
const connectDB = async()=> {
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect('mongodb+srv://nikhil2306:5ZeDaj6D-UeGnjj@cluster0.cgowcit.mongodb.net/user?retryWrites=true&w=majority');
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDB;

