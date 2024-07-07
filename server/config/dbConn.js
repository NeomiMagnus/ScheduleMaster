const mongoose = require("mongoose")

const conectDataBase = async () => {
    try {
        await mongoose.connect(process.env.DATA_BASE_URI)
    }
    catch (err) {
        console.log(`error ${err}`)
    }
}
module.exports = conectDataBase