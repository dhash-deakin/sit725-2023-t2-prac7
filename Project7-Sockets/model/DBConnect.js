const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://admin2:admin123@cluster0.bka3g19.mongodb.net/?retryWrites=true&w=majority"; // MongoDB connection URI
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const dbName = "sit725db"; // Database name
async function connectToDatabase() {
  
  

  try {
    await client.connect();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

module.exports = { connectToDatabase, client, dbName };
