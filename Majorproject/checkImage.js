const mongoose = require("mongoose");
const Listing = require("./Models/listing.js");

async function updateImage() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");

        const result = await Listing.updateOne(
            { title: "Mountain Retreat" },
            {
                $set: {
                    image: {
                        filename: "listingimage",
                        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
                    }
                }
            }
        );

        console.log("Update result:", result);

        const listing = await Listing.findOne({ title: "Mountain Retreat" });
        console.log("Updated image:", listing.image);
    } catch (error) {
        console.error(error);
    } finally {
        await mongoose.disconnect();
    }
}

updateImage();