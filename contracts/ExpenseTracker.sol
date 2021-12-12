// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ExpenseTracker {
    
    struct transaction{
        string text;
        int256 amount;
    }
    
    mapping(address => transaction[]) private transactionMap;
    mapping(address => int256) private userBalance;
    

    
    function addTransaction (string memory text, int256 val) public returns(bool){
        transactionMap[msg.sender].push(transaction(text, val));
        userBalance[msg.sender] += val ;
        return true;
    }
    
    function getBalance(address _account) public view returns(int256){
        return userBalance[_account];
    }
    
    function getTransactions(address _account) public view returns(transaction[] memory){
        return transactionMap[_account];
    }
}