const { Router } = require("express");
const { check } = require("express-validator");
const { redirect } = require("../controllers/url");
const { validateFields } = require("../middlewares/validate-fields");
const { validateShortenUrl } = require("../middlewares/validate-shorten-url");

const router = Router();

router.get("/:urlcode", [
  check("urlcode").not().isEmpty(),
  validateShortenUrl,
  validateFields,
]);

module.exports = router;
