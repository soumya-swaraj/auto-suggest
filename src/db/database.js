const mongoose = require('mongoose');


mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.mdlbndt.mongodb.net/${process.env.MONGO_DATABASE}`).then(() => {
    console.log("Database connected");
})