var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "https://fast-stream-94232.herokuapp.com/");

// module.exports.Campsite = require("./campsite.js.example");
