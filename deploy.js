const ethers = require("hardhat");

async function main() {
  const Lock = await ethers.getContractFactory("Lock");
  console.log("Deploying...");
  const hardhatLock = await Lock.deploy();
  console.log(hardhatLock.address);
}

main();
