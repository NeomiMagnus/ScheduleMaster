const mongoose = require("mongoose")
const importanceLevelSchcema = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    level: {
        type: Number,
        require:true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("ImportanceLevel", importanceLevelSchcema)