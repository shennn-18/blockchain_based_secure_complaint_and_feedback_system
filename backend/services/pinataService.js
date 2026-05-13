const axios = require("axios");

async function pinJSONToIPFS(jsonData) {
  try {
    const response = await axios.post(
      "https://api.pinata.cloud/pinning/pinJSONToIPFS",
      jsonData,
      {
        headers: {
          "Content-Type": "application/json",
          pinata_api_key: process.env.PINATA_API_KEY,
          pinata_secret_api_key: process.env.PINATA_SECRET_API_KEY,
        },
      }
    );

    return {
      cid: response.data.IpfsHash,
      pinSize: response.data.PinSize,
      timestamp: response.data.Timestamp,
    };
  } catch (error) {
    console.error("Pinata upload error:", error.response?.data || error.message);
    throw new Error("Failed to upload data to IPFS.");
  }
}

function getIPFSUrl(cid) {
  return `https://gateway.pinata.cloud/ipfs/${cid}`;
}

module.exports = {
  pinJSONToIPFS,
  getIPFSUrl,
};