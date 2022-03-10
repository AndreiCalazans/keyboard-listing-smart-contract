

async function main() {
  const keyboardsContractFactory = await hre.ethers.getContractFactory("Keyboards");
  const keyboardsContract = await keyboardsContractFactory.deploy();
  await keyboardsContract.deployed();
  console.log("Contract deployed to:", keyboardsContract.address);
  let keyboards = await keyboardsContract.getKeyboards();
  console.log("We got the keyboards!", keyboards);

  const keyboardTxn = await keyboardsContract.create("A really great keyboard!");
  await keyboardTxn.wait();

  keyboards = await keyboardsContract.getKeyboards();
  console.log("We got the keyboards!", keyboards);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

