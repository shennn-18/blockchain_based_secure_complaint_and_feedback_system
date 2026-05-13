// Example: frontend calling backend complaint upload route

async function uploadComplaintToIPFS(complaintData) {
  const response = await fetch("http://localhost:5000/api/ipfs/complaint", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(complaintData),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Failed to upload complaint to IPFS");
  }

  return result.cid;
}

// Example usage
const complaintData = {
  title: "Aircon not working",
  description: "Room B203 aircon is broken.",
  category: "Facilities",
  walletAddress: "0x123456789",
};

uploadComplaintToIPFS(complaintData)
  .then((cid) => {
    console.log("CID:", cid);
    // Next step: send cid to smart contract
    // await submitComplaint(category, cid)
  })
  .catch((error) => {
    console.error(error.message);
  });