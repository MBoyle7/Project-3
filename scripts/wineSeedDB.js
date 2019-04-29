const mongoose = require("mongoose");
const db = require("../models/wine");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/Wine"
);

const wineSeed = [
    {
        name: "Papilon",
        type: "Red Blend",
        description: 
            "A bold red blend, with robust flavors of currant, smoke, and leather",
        date: new Date(Date.now())
    },
    {
        name: "Big House Red",
        type: "Red Blend",
        description:
            "A cheap red blend. Looking to get drunk, this will do the trick",
        date: new Date(Date.now())
    },
    {
        name: "Santa Margarita",
        type: "Pinot Grigio",
        description: 
            "A light, crisp Pinot Grigio from Italy, well known, and a trusted stand-by",
        date: new Date(Date.now())

    }
]

db.Wine 
    .remove({})
    .then(() => db.Wine.collection.insertMany(wineSeed))
    .then(date => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });