var Token = artifacts.require("./Token.sol");

contract("Token = balanceOf function", (accounts) => {

    var account1 = web3.eth.accounts[0];
    var account5 = web3.eth.accounts[4];

    it('should return owners balance.', async() => {
        tokenContract = await Token.deployed();
        balance = await tokenContract.balanceOf(account1);
        assert.equal(balance, 10000, "owner's balance is wrong.");
    })

    it('should return 0 for new user.', async() => {
        newBalance = await tokenContract.balanceOf(account5);
        assert.equal(newBalance, 0, "new user's balance is wrong.");
    })

})