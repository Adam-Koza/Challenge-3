var Token = artifacts.require("./Token.sol");

contract("Token = expirationOf function", (accounts) => {

    var account1 = web3.eth.accounts[0];
    var account5 = web3.eth.accounts[4];

    it('should return 0 for owner/minters expiration.', async() => {
        tokenContract = await Token.deployed();
        expiration = await tokenContract.expirationOf(account1);
        assert.equal(expiration, 0, "owner's expiration is wrong.");
    })

    it('should return false for new user.', async() => {
        expiration = await tokenContract.expirationOf(account5);
        assert.equal(expiration, false, "new user's expiration is wrong.");
    })

    it('should return greater then 0 for non-minter.', async() => {
        await tokenContract.transfer(account5, 500, { from: account1 });
        expiration = await tokenContract.expirationOf(account5);
        assert.equal(expiration > 0, true, "non-minter's expiration is wrong.");
    })

})