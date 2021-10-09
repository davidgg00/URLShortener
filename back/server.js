const { dbConnection } = require("./database/config");
const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8000;
async function connectDB() {
  await dbConnection();
}

connectDB();
app.listen(PORT, () => console.log(`server started, listening PORT ${PORT}`));
app.use(express.json());

app.use("/api", require("./routes/url"));
app.use(require("./routes/redirect"));
