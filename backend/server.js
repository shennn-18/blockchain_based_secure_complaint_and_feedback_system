const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const ipfsRoutes = require("./routes/ipfsRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Backend server is running",
  });
});

app.use("/api/ipfs", ipfsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});