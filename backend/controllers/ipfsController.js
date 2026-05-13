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

module.exports = {
  uploadComplaintJSON,
};