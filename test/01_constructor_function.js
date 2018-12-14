var Token = artifacts.require("./Token.sol");

contract("Token = constructor function", (accounts) => {

    var account1 = web3.eth.accounts[0];

    it('should create a totalSupply equal to argument.', async() => {
        tokenContract = await Token.deployed();
        tokenSupply = await tokenContract.totalSupply();
        assert.equal(tokenSupply, 10000, "totalSupply is set incorrectly.");
    })

    it('should give totalSupply to owner.', async() => {
        ownerBalance = await tokenContract.balanceOf(account1);
        assert.equal(ownerBalance, 10000, "totalSupply is not given to the owner.");
    })

    it('should make owner a minter.', async() => {
        ownerIsMinter = await tokenContract.minters(account1);
        assert.equal(ownerIsMinter, true, "owner is not a minter.");
    })
})