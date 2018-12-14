pragma solidity ^0.4.24;

contract Token {

    address public owner;
    uint public totalSupply;

    mapping(address => uint) public balances;
    mapping(address => uint) public expiration;
    mapping(address => bool) public minters;

    constructor(uint _totalSupply) public {
        owner = msg.sender;
        totalSupply = _totalSupply;
        balances[owner] = totalSupply;
        minters[owner] = true;
    }

    function transfer(address _to, uint _value) public returns(bool) {
        // Expired tokens
        if (minters[msg.sender] == false && expiration[msg.sender] != 0 && expiration[msg.sender] < block.number) {
            totalSupply -= balances[msg.sender];
            balances[msg.sender] = 0;
            return false;
        }
        require(balances[msg.sender] >= _value &&
            balances[_to] + _value > balances[_to] &&
            ((expiration[msg.sender] == 0) || (expiration[msg.sender] > block.number)));
        // Minter to new or existing user
        if (minters[msg.sender] == true && minters[_to] == false) {
            balances[msg.sender] -= _value;
            balances[_to] += _value;
            // Tokens expire in 1 year
            expiration[_to] = block.number + 2102400;
            return true;
            // Minter to minter
        } else if (minters[msg.sender] == true && minters[_to] == true) {
            balances[msg.sender] -= _value;
            balances[_to] += _value;
            return true;
            // User to user
        } else {
            balances[msg.sender] -= _value;
            balances[_to] += _value;
            return true;
        }
    }

    function addMinter(address _minter) public returns(bool) {
        require(minters[msg.sender] == true);
        minters[_minter] = true;
        expiration[_minter] = 0;
        return true;
    }

    function removeMinter(address _minter) public returns(bool) {
        require(minters[msg.sender] == true);
        minters[_minter] = false;
        totalSupply -= balances[_minter];
        balances[_minter] = 0;
        return true;
    }

    function mint(uint _amount) public returns(bool) {
        require(minters[msg.sender] == true);
        totalSupply += _amount;
        balances[msg.sender] += _amount;
        return true;
    }

    function balanceOf(address _owner) public view returns(uint) {
        return balances[_owner];
    }

    function expirationOf(address _owner) public view returns(uint) {
        return expiration[_owner];
    }
}