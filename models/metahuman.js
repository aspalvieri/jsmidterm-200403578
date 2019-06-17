// We will need our mongoose library
const mongoose = require(`mongoose`);

// Your schema
const MetahumanShema = new mongoose.Schema({
    alias: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    affiliation: {
        type: String,
        required: true
    },
    metatype: {
        type: String,
        enum: ["Superhero", "Villain", "Antihero"],
        default: "Superhero"
    }
}, {
    timestamps: true
});


// Exporting our metahuman model
module.exports = mongoose.model("Metahuman", MetahumanShema);