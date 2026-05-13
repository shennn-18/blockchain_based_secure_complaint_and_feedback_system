const { pinJSONToIPFS, getIPFSUrl } = require("../services/pinataService");

async function uploadComplaintJSON(req, res) {
  try {
    const { title, description, category, walletAddress, createdAt } = req.body;

    if (!title || !description || !category || !walletAddress) {
      return res.status(400).json({
        success: false,
        message: "Title, description, category, and wallet address are required.",
      });
    }

    const complaintData = {
      type: "complaint",
      title,
      description,
      category,
      walletAddress,
      createdAt: createdAt || new Date().toISOString(),
    };

    const result = await pinJSONToIPFS(complaintData);

    return res.status(201).json({
      success: true,
      message: "Complaint uploaded to IPFS successfully.",
      cid: result.cid,
      url: getIPFSUrl(result.cid),
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Server error while uploading complaint.",
    });
  }
}

async function uploadFeedbackJSON(req, res) {
  try {
    const { complaintId, rating, message, walletAddress, createdAt } = req.body;

    if (!complaintId || !rating || !message || !walletAddress) {
      return res.status(400).json({
        success: false,
        message: "Complaint ID, rating, message, and wallet address are required.",
      });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({
        success: false,
        message: "Rating must be between 1 and 5.",
      });
    }

    const feedbackData = {
      type: "feedback",
      complaintId,
      rating,
      message,
      walletAddress,
      createdAt: createdAt || new Date().toISOString(),
    };

    const result = await pinJSONToIPFS(feedbackData);

    return res.status(201).json({
      success: true,
      message: "Feedback uploaded to IPFS successfully.",
      cid: result.cid,
      url: getIPFSUrl(result.cid),
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Server error while uploading feedback.",
    });
  }
}

async function uploadResolutionJSON(req, res) {
  try {
    const { complaintId, resolutionNote, resolvedBy, resolvedAt } = req.body;

    if (!complaintId || !resolutionNote || !resolvedBy) {
      return res.status(400).json({
        success: false,
        message: "Complaint ID, resolution note, and resolver address are required.",
      });
    }

    const resolutionData = {
      type: "resolution",
      complaintId,
      resolutionNote,
      resolvedBy,
      resolvedAt: resolvedAt || new Date().toISOString(),
    };

    const result = await pinJSONToIPFS(resolutionData);

    return res.status(201).json({
      success: true,
      message: "Resolution uploaded to IPFS successfully.",
      cid: result.cid,
      url: getIPFSUrl(result.cid),
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Server error while uploading resolution.",
    });
  }
}

module.exports = {
  uploadComplaintJSON,
  uploadFeedbackJSON,
  uploadResolutionJSON,
};