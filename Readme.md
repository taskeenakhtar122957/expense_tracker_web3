### This Expense Tracker DApp can work with mulitple EOAs and keeps track of 'Balance' and 'Transaction History' of each etherium account seperately.
- To test the DApp; deploy the smart contract on Truffle Test Network >>> truffle develop (from VSCode terminal)
- Migrate the contract and replace the contract address with that of yours in the file ExpenseTrackerDapp_Web3_HTML_CSS/dapp/js/configs/contracts_config.js
@ 
let EtContractAddress = "0x800205eB19bf1eF625F3E59C31A1e87198C874F8";
- Open another terminal in VSCode and Run the lite server >> npm start in 'dapp' directory i.e. ExpenseTrackerDapp_Web3_HTML_CSS/dapp/
- Connect the MetaMask with Truffle Network through Custom RPC by using URL: http://127.0.0.1:9545/ and Chain id: 1337
- Import the Truffle accounts into Metamask and connect them with Truffle Network
- Select the respective account in Metamak before entering any new transaction
- To check the balance and transaction history rescpective ethereum account address needs to be entered
- Note: In case if you get the nounce error after several testing attempts -- just reset the accounts in Metamask and tr again 

============================================================================================
#### To install the lite server   
1 - create package file and inside this file type {} then save     
2 - create index html file    
3 - npm i lite-server --save-dev     
4 - add script part in package     
  "scripts": { "start": "lite-server"},    
5 - run the server (npm start) and see if html works fine.   
6 - install web3 library   
> npm i web3 --save-dev   
your web3 library is installed now.   

7 - use  "type": "commonjs" inside package.json   

8. Add in html page following libs   

<script type="text/javascript" src="node_modules/web3/dist/web3.min.js"></script> <br />

<script type="text/javascript" src="./src/index.js"></script>   
