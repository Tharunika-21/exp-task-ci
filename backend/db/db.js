// const mongoos = require('mongoose');
// const connectDB = async()=>{
//     try {
//         await mongoos.connect('mongodb://localhost:27017/expense_collection')
//             console.log("Connected!!!")
//     } catch (error) {
//         console.log("Not Connected!!")
//     }
// }
// module.exports = connectDB
// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         await mongoose.connect('mongodb://localhost:27017/expense_collection', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("Connected!!!");
//     } catch (error) {
//         console.error("Connection failed:", error.message);
//     }
// };

// module.exports = connectDB;

// Assuming this is the configuration for MongoDB connection in your backend service

// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         await mongoose.connect('mongodb://docker-compose-nodejs-mongodb-mongodb-1:27017/expense_collection', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("Connected to MongoDB!!!");
//     } catch (error) {
//         console.error("Connection failed:", error.message);
//     }
// };

// module.exports = connectDB;

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        //mongodb+srv://tharunika:tharunika@cluster0.g9dpsrf.mongodb.net/
        await mongoose.connect('mongodb+srv://tharunika:tharunika@cluster0.g9dpsrf.mongodb.net/', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB!!!");
    } catch (error) {
        console.error("Connection failed:", error.message);
    }
};

module.exports = connectDB;
