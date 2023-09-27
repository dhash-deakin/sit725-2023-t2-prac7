const { client, dbName } = require("../model/DBConnect");

const insertData = async (data) => {
  const db = client.db(dbName);
  const collection = db.collection("formdata"); //collection name

  try {
    console.log(data)
    const result = await collection.insertOne(data);
    console.log("Inserted data:", result.insertedId);
  } catch (error) {
    console.error("Error inserting data:", error);
    throw error;
  }
};

module.exports = { insertData };
