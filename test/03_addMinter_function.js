var Token = artifacts.require("./Token.sol");

contract("Token = addMinter function", (accounts) => {

    var account1 = web3.eth.accounts[0];
    var account2 = web3.eth.accounts[1];
    var account3 = web3.eth.accounts[2];
    var account4 = web3.eth.accounts[3];

    it('should add new minter', async () => {
        var tokenContract = await Token.deployed();
        await tokenContract.addMinter(account3, { from: account1 });
        var minterStatus = await tokenContract.minters(account3);
        assert.equal(minterStatus, true, "minter status is incorrect.");
    })

    it('should set expiration of minter to 0', async () => {
        var expiration = await tokenContract.expiration(account3);
        assert.equal(expiration, 0, "expiration date of minter tokens is incorrect.");
    })

    it('should revert addMinter request from account without minter status.', async () => {

        try {
            await tokenContract.addMinter(account1, { from: account4 });
        } catch (err) {
            assert.equal(err.toString().includes("revert"), true, "addMinter did not revert.");
        }
    })

})