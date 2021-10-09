const { Router } = require("express");
const { check } = require("express-validator");
const { shorten } = require("../controllers/url");
const { validateFields } = require("../middlewares/validate-fields");

const router = Router();

router.post(
  "/shorten",
  [check("longURL").not().isEmpty(), validateFields],
  shorten
);

module.exports = router;
