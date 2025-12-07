// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleToken {
    mapping(address => uint256) public balance;

    function mint(uint256 amount) public {
        balance[msg.sender] += amount;
    }

    function transfer(address to, uint256 amount) public {
        require(balance[msg.sender] >= amount, "Insufficient balance");
        balance[msg.sender] -= amount;
        balance[to] += amount;
    }
}
