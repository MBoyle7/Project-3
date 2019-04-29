const mongoose = requir("mongoose");
const db = require("..models/beer");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/Beer"
);

const beerSeed = [
    {
        name: "Miller Lite",
        type: "American Lager",
        description: 
            "A crisp refreshing lager, with lots of flavor",
        date: new Date(Date.now())
    },
    {
        name: "Guiness",
        type: "Stout",
        description: 
            "A traditional stout beer, famoust for St. Paddy's Day and Ireland",
        date: new Date(Date.now())
    },
    {
        name: "Boulevard Unfiltered Wheat",
        type: "Wheat Beer",
        description:
            "A crisp refreshing micro-brew utilizing wheat",
        date: new Date(Date.now())
    }
]

db.Beer 
    .remove({})
    .then(() => db.Beer.collection.insertMany(beerSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.log.error(err);
        process.exit(1);
    });