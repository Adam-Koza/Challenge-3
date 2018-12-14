var Token = artifacts.require("./Token.sol");

contract("Token = transfer function", (accounts) => {

    var account1 = web3.eth.accounts[0];
    var account2 = web3.eth.accounts[1];
    var account3 = web3.eth.accounts[2];
    var account4 = web3.eth.accounts[3];

    it('should transfer from minter to non-minter', async () => {
        var tokenContract = await Token.deployed();
        await tokenContract.transfer(account2, 500, { from: account1 });
        var newBalance = await tokenContract.balanceOf(account2);
        assert.equal(newBalance, 500, "new balance of non-minter is incorrect.");
    })

    it('should add/extend expiration to non-minter after transfer', async () => {
        var oldExpiration = await tokenContract.expiration(account2);
        await tokenContract.transfer(account2, 500, { from: account1 });
        var newExpiration = await tokenContract.expiration(account2);
        assert.equal(newExpiration > oldExpiration, true, "new expiration date of non-minter tokens is incorrect.");
    })

    it('should transfer from minter to minter', async () => {
        await tokenContract.addMinter(account2, { from: account1 });
        await tokenContract.transfer(account2, 500, { from: account1 });
        var newBalance = await tokenContract.balanceOf(account2);
        assert.equal(newBalance, 1500, "new balance of minter is incorrect.");
    })

    it('should not modify expiration to minter after transfer', async () => {
        var oldExpiration = await tokenContract.expiration(account2);
        await tokenContract.transfer(account2, 500, { from: account1 });
        var newExpiration = await tokenContract.expiration(account2);
        assert.equal(oldExpiration == false, newExpiration == false, "expiration date of minter tokens is incorrect.");
    })

    it('should transfer from non-minter to non-minter', async () => {
        await tokenContract.transfer(account3, 500, { from: account2 });
        await tokenContract.transfer(account4, 500, { from: account3 });
        var newBalance = await tokenContract.balanceOf(account4);
        assert.equal(newBalance, 500, "new balance of minter is incorrect.");
    })

    it('should not modify expiration to non-minter after transfer', async () => {
        var oldExpiration = await tokenContract.expiration(account3);
        await tokenContract.transfer(account2, 500, { from: account4 });
        var newExpiration = await tokenContract.expiration(account3);
        assert.equal(oldExpiration < newExpiration, false, "expiration date of non-minter tokens is incorrect.");
    })

    it('should revert transfer from account with insufficient balance.', async () => {

        try {
            await tokenContract.transfer(account2, 500, { from: account4 });
        } catch (err) {
            assert.equal(err.toString().includes("revert"), true, "transfer did not revert.");
        }
    })


})
