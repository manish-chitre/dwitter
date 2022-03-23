const {expect} = require("chai");
const {ethers} = require("hardhat");

describe("Dwitter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Dwitter = await ethers.getContractFactory("Dwitter");
    const dwitter = await Dwitter.deploy();
    await dwitter.deployed();

    expect(await dwitter.getName()).to.equal("");

    const setName = await dwitter.setName("Manish");

    // wait until the transaction is mined
    await setName.wait();

    expect(await dwitter.getName()).to.equal("Manish");
  });
});
