const URL = require("../models/Url");
const validateShortenUrl = async (req, res, next) => {
  const urlexists = await URL.findOne({
    shortenURLCode: req.params.urlcode,
  });

  if (urlexists) {
    return res.redirect(urlexists.longURL);
  } else {
    return res.status(404).json({ error: "URL NOT FOUND" });
  }
};

module.exports = {
  validateShortenUrl,
};
