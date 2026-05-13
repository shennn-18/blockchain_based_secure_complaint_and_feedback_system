const express = require("express");
const { uploadComplaintJSON } = require("../controllers/ipfsController");

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    message: "IPFS route is working",
  });
});

router.post("/complaint", uploadComplaintJSON);

module.exports = router;