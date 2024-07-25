const { error } = require("ajv/dist/vocabularies/applicator/dependencies");
const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://Restaurant:GoFoodRestaurant@cluster0.na7rbey.mongodb.net/GoFood?retryWrites=true&w=majority&appName=Cluster0";

const initaliseConnection = async() => {
    try{
        await mongoose.connect(mongoURI, {useNewUrlParser: true});
        console.log("connected");

        const db = mongoose.connection.db;
        try{
            const fetchedData = await db.collection("FoodItems").find({}).toArray();

            try{
                const fetchedCategory = await db.collection("FoodCategory").find({}).toArray()
                global.foodCategory = fetchedCategory;
                global.foodItems = fetchedData;
            }catch(err){
                console.log("Fetched category error: ", err);
            }

        }catch(error){
            console.log(error.message);
        }

    }catch (error){
        console.log(error.message);
    }
}

module.exports = initaliseConnection;
