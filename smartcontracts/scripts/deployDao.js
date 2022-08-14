
const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const undaoTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const daoedAmount = hre.ethers.utils.parseEther("1");

  const Dao = await hre.ethers.getContractFactory("Dao");
  const dao = await Dao.deploy();

  await dao.deployed();

  console.log("Dao with 1 ETH deployed to:", dao.address);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
