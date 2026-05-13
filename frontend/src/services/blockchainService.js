import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../config/contract";

export function getProvider() {
  if (!window.ethereum) {
    throw new Error("MetaMask is not installed.");
  }

  return new ethers.providers.Web3Provider(window.ethereum);
}

export function getSigner() {
  const provider = getProvider();
  return provider.getSigner();
}

export function getContract() {
  const signer = getSigner();
  return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
}

export async function submitComplaint(category, complaintCid) {
  const contract = getContract();

  const tx = await contract.submitComplaint(category, complaintCid);
  await tx.wait();

  return tx;
}

export async function getComplaint(complaintId) {
  const contract = getContract();

  return await contract.getComplaint(complaintId);
}

export async function getUserComplaints(walletAddress) {
  const contract = getContract();

  return await contract.getUserComplaints(walletAddress);
}

export async function updateComplaintStatus(complaintId, status) {
  const contract = getContract();

  const tx = await contract.updateComplaintStatus(complaintId, status);
  await tx.wait();

  return tx;
}

export async function resolveComplaint(complaintId, resolutionCid) {
  const contract = getContract();

  const tx = await contract.resolveComplaint(complaintId, resolutionCid);
  await tx.wait();

  return tx;
}

export async function submitFeedback(complaintId, rating, feedbackCid) {
  const contract = getContract();

  const tx = await contract.submitFeedback(complaintId, rating, feedbackCid);
  await tx.wait();

  return tx;
}