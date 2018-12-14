var Token = artifacts.require("./Token.sol");
var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(Token, 10000);
  deployer.deploy(SimpleStorage);
};
