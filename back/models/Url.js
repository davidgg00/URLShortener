const { Schema, model } = require("mongoose");

const URLSchema = Schema({
  longURL: {
    type: String,
    required: [true, "longURL field is required"],
  },
  shortenURLCode: {
    type: String,
    required: [true, "shortURL field is required"],
    unique: true,
  },
});

module.exports = model("Url", URLSchema);
