const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server started, listening PORT ${PORT}`));