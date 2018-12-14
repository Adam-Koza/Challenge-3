var Token = artifacts.require("./Token.sol");

contract("Token = removeMinter function", (accounts) => {

    var account1 = web3.eth.accounts[0];
    var account2 = web3.eth.accounts[1];
    var account3 = web3.eth.accounts[2];
    var account4 = web3.eth.accounts[3];

    it('should remove minter', async () => {
        var tokenContract = await Token.deployed();
        await tokenContract.addMinter(account4, { from: account1 });
        await tokenContract.transfer(account4, 500, { from: account1 });
        await tokenContract.removeMinter(account4, { from: account1 });
        var minterStatus = await tokenContract.minters(account4);
        assert.equal(minterStatus, false, "minter status is incorrect.");
    })

    it('should set balance of ex-minter to 0', async () => {
        var newBalance = await tokenContract.balanceOf(account4);
        assert.equal(newBalance, 0, "balance of ex-minter is incorrect.");
    })

    it('should revert removeMinter request from account without minter status.', async () => {

        try {
            await tokenContract.removeMinter(account1, { from: account4 });
        } catch (err) {
            assert.equal(err.toString().includes("revert"), true, "removeMinter did not revert.");
        }
    })

})