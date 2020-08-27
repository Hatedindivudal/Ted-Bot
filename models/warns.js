const mongoose = require("mongoose");
let Schema = new mongoose.Schema({
    guildId: {
        type: String,
        required: true,
      },
      userId: {
        type: String,
        required: true,
      },
      warnings: {
        type: [Object],
        required: true,
      },
    })
    

module.exports = mongoose.model("warns", Schema);