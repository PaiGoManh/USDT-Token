const { ethers, run } = require("hardhat");

async function main() {
  const USDT = await ethers.getContractFactory("USDT");

  const initialHolder = "0x9F822a1b5A198037A6650111970ef6Ce3fe60847";

  console.log("Deploying USDT...");
  const usdt = await USDT.deploy(initialHolder);
  await usdt.waitForDeployment();

  const usdtAddress = await usdt.getAddress();
  console.log("USDT deployed to:", usdtAddress);

  console.log("Waiting for a few blocks before verification...");
  await usdt.deploymentTransaction().wait(5); 

  try {
    await run("verify:verify", {
      address: usdtAddress,
      constructorArguments: [initialHolder],
    });
    console.log("USDT contract verified successfully!");
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("USDT contract is already verified.");
    } else {
      console.error("Verification failed:", error);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  });