const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./Models/listing.js');


const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';
async function main() {
    await mongoose.connect(MONGO_URL);
}

main().then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
   console.error('MongoDB connection error:', err);
});

app.get('/', (req, res) => {
    res.send('Hi, I am root');
});



app.get('/testListing', async (req, res) => {
    let sampleListing = new Listing({
        title: 'My new Villa',
        description: 'This is a beachfront villa with stunning views of the ocean.',
        price: 1000,
        location: 'Goa',
        country: 'India',
    });

    await sampleListing.save();
    console.log('Sample listing saved to the database');
    res.send('Successfully tested.');
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
