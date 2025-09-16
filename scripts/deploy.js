const { ethers } = require("hardhat");

async function main() {
  const USDT = await ethers.getContractFactory("USDT");
  const usdt = await USDT.deploy();
  
  await usdt.waitForDeployment();
  
  console.log("USDT deployed to:", await usdt.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  });