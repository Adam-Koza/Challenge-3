var Token = artifacts.require("./Token.sol");

contract("Token = mint function", (accounts) => {

    var account1 = web3.eth.accounts[0];
    var account4 = web3.eth.accounts[3];

    it('should create new tokens and assign them to the owner.', async() => {
        var tokenContract = await Token.deployed();
        var oldOwnerBalance = await tokenContract.balanceOf(account1);
        await tokenContract.mint(1000, {from: account1});
        var newOwnerBalance = await tokenContract.balanceOf(account1);
        assert.equal(newOwnerBalance > oldOwnerBalance, true, "owner was not assigned the tokens.");
    })

    it('should update the total supply.', async() => {
        var oldSupply = await tokenContract.totalSupply();
        await tokenContract.mint(1000, {from: account1});
        var newSupply = await tokenContract.totalSupply();
        assert.equal(newSupply > oldSupply, true, "total supply was not updated.");
    })

    it('should revert mint from account without minters status.', async () => {

        try {
            await tokenContract.mint(1000, { from: account4 });
        } catch (err) {
            assert.equal(err.toString().includes("revert"), true, "mint did not revert.");
        }
    })


})