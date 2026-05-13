const express = require("express");
const {
  uploadComplaintJSON,
  uploadFeedbackJSON,
  uploadResolutionJSON,
} = require("../controllers/ipfsController");

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    message: "IPFS route is working",
  });
});

router.post("/complaint", uploadComplaintJSON);
router.post("/feedback", uploadFeedbackJSON);
router.post("/resolution", uploadResolutionJSON);

module.exports = router;