
// var MyContract = artifacts.require("./OscarToken.sol");

// module.exports = function(deployer) {
//   deployer.deploy(MyContract, "ODIN", "ODIN", 6);
// };

// var MyContract = artifacts.require("./OscarPlayer.sol");

// module.exports = function(deployer) {
//    deployer.deploy(MyContract);
// };

var MyContract = artifacts.require("./OscarDice.sol");

module.exports = function(deployer) {
   deployer.deploy(MyContract);
};


// var MyContract = artifacts.require("./OscarRing.sol");

// module.exports = function(deployer) {
//    deployer.deploy(MyContract);
// };

// var MyContract = artifacts.require("./OscarTower.sol");

// module.exports = function(deployer) {
//    deployer.deploy(MyContract);
// };
