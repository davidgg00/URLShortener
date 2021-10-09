const URL = require("../models/Url");
const uniqid = require("uniqid");

const shorten = async (req, res) => {
  try {
    const { longURL } = req.body;
    const shortenURLCode = uniqid.time();

    const data = {
      longURL,
      shortenURLCode,
    };

    const urlgenerate = new URL(data);
    await urlgenerate.save();
    res.status(201).json(urlgenerate);
  } catch (error) {
    res.status(401).json({ error });
  }
};

module.exports = {
  shorten,
};
