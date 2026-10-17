const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../Models/listing.js');

const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';
main().then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
    console.log('MongoDB connected');
}

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log('Initialization data inserted successfully');
};

initDB()
  .then(() => mongoose.connection.close())
  .catch((err) => {
    console.error("Initialization error:", err);
    mongoose.connection.close();
  });