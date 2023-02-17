require("tls").DEFAULT_MIN_VERSION = "TLSv1";
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const path = require("path");

const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger("dev"));
// app.use(helmet({ crossOriginResourcePolicy: false }));
// app.use("/api/uploads", express.static(path.join(__dirname, "../uploads")));

app.get("/api", (req, res) => {
  res.send("KEPAP API");
});

app.use("/api", require("./routes/product.route"));
app.use("/api", require("./routes/user.route"));
app.use("/api", require("./routes/user-role.route"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
