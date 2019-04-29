const mongoose = requir("mongoose");
const db = require("..models/liquor");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/Liquor"
);

const liquorSeed = [
    {
        name: "Maker's Mark",
        type: "Bourbon",
        description: 
            "A crisp refreshing bourbon, with lots of flavor",
        date: new Date(Date.now())
    },
    {
        name: "Tito's",
        type: "Vodka",
        description: 
            "A traditional stout vodka, famoust for St. Paddy's Day and Ireland",
        date: new Date(Date.now())
    },
    {
        name: "Knob Creek",
        type: "Bourbon",
        description:
            "A crisp refreshing bourbon utilizing wheat",
        date: new Date(Date.now())
    }
]

db.Liquor 
    .remove({})
    .then(() => db.Liquor.collection.insertMany(liquorSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.log.error(err);
        process.exit(1);
    });