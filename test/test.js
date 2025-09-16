const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("USDT Token", function () {
  let USDT, usdt, owner, addr1;

  beforeEach(async function () {
    USDT = await ethers.getContractFactory("USDT");
    [owner, addr1] = await ethers.getSigners();

    console.log("Deploying USDT contract...");
    // Pass owner.address as initialHolder so owner gets initial supply
    const contractInstance = await USDT.deploy(owner.address);
    console.log("USDT deployed, waiting for confirmation...");
    await contractInstance.waitForDeployment();
    console.log("USDT contract deployment confirmed at:", await contractInstance.getAddress());

    usdt = contractInstance;
  });

  it("should have correct name and symbol and decimals", async function () {
    expect(await usdt.name()).to.equal("USDT");
    expect(await usdt.symbol()).to.equal("USDT");
    expect(await usdt.decimals()).to.equal(18);
  });

  it("should assign total supply to owner", async function () {
    const ownerBalance = await usdt.balanceOf(owner.address);
    const totalSupply = await usdt.totalSupply();
    expect(totalSupply).to.equal(ownerBalance);
  });

it("should have total supply of 100 billion tokens with 18 decimals", async function () {
    const totalSupply = await usdt.totalSupply();
    const expectedSupply = ethers.parseUnits("100000000000", 18); 
    expect(totalSupply).to.equal(expectedSupply);
});

it("should allow token transfer between accounts", async function () {
    await usdt.transfer(addr1.address, ethers.parseUnits("1000", 18));
    const addr1Balance = await usdt.balanceOf(addr1.address);
    expect(addr1Balance).to.equal(ethers.parseUnits("1000", 18));
});
});
