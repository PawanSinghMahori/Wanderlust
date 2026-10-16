const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
    },
    image: {
        type: String,
        default: 
        'https://images.unsplash.com/photo-1789980635138-0a3f1882c70f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
         set: (v) =>
          v=== ''
           ? 'https://images.unsplash.com/photo-1789980635138-0a3f1882c70f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' 
           : v,
    },
    location: {
        type: String,
    },
    country: { 
        type: String,
    },
});

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing; 