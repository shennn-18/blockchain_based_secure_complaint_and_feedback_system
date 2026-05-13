export function formatWalletAddress(address) {
  if (!address) return "Not connected";

  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function formatComplaintStatus(status) {
  const statuses = ["Pending", "Under Review", "Resolved", "Rejected", "Escalated"];

  return statuses[Number(status)] || "Unknown";
}

export function formatTimestamp(timestamp) {
  if (!timestamp) return "-";

  const date = new Date(Number(timestamp) * 1000);
  return date.toLocaleString();
}

export function formatError(error) {
  if (!error) return "Unknown error.";

  if (error.reason) return error.reason;
  if (error.data?.message) return error.data.message;
  if (error.message) return error.message;

  return "Something went wrong.";
}