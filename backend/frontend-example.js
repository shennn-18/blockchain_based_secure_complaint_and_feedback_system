// Example functions for frontend to call backend IPFS routes

const BASE_URL = "http://localhost:5000";

export async function uploadComplaintToIPFS(complaintData) {
  const response = await fetch(`${BASE_URL}/api/ipfs/complaint`, {
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

export async function uploadFeedbackToIPFS(feedbackData) {
  const response = await fetch(`${BASE_URL}/api/ipfs/feedback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(feedbackData),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Failed to upload feedback to IPFS");
  }

  return result.cid;
}

export async function uploadResolutionToIPFS(resolutionData) {
  const response = await fetch(`${BASE_URL}/api/ipfs/resolution`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resolutionData),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Failed to upload resolution to IPFS");
  }

  return result.cid;
}