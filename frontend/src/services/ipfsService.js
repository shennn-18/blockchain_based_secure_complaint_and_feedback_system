const BASE_URL = "http://localhost:5000";

async function handleResponse(response) {
  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Request failed.");
  }

  return result;
}

export async function uploadComplaintToIPFS(complaintData) {
  const response = await fetch(`${BASE_URL}/api/ipfs/complaint`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(complaintData),
  });

  const result = await handleResponse(response);
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

  const result = await handleResponse(response);
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

  const result = await handleResponse(response);
  return result.cid;
}