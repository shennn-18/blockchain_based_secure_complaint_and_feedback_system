export async function connectWallet() {
  if (!window.ethereum) {
    throw new Error("MetaMask is not installed. Please install MetaMask first.");
  }

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  return accounts[0];
}

export async function getCurrentAccount() {
  if (!window.ethereum) {
    return null;
  }

  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });

  return accounts.length > 0 ? accounts[0] : null;
}

export async function checkNetwork() {
  if (!window.ethereum) {
    throw new Error("MetaMask is not installed.");
  }

  const chainId = await window.ethereum.request({
    method: "eth_chainId",
  });

  return chainId;
}

export function listenToAccountChanges(callback) {
  if (!window.ethereum) return;

  window.ethereum.on("accountsChanged", (accounts) => {
    callback(accounts[0] || null);
  });
}

export function listenToNetworkChanges(callback) {
  if (!window.ethereum) return;

  window.ethereum.on("chainChanged", (chainId) => {
    callback(chainId);
  });
}