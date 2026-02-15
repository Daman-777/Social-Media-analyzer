const express = require("express");
const cors = require("cors");
const uploadRoute = require("./routes/upload");

const app = express();

app.use(
  cors({
    origin: "*",
  }),
);

app.use(express.json());

app.use("/api", uploadRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
