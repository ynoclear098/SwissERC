require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
// Remember to use the private key of a testing account
// For better security practices, it's recommended to use npm i dotenv for storing secret variables

//use configuration-variables in hardhat to set PRIVATE_KEY variable
// const PRIVATE_KEY = vars.get("PRIVATE_KEY");

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      // with this we are using .env instead of vars.get
      accounts: [`0x` + `${process.env.PRIVATE_KEY}`], 
    },
  },
};
