var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'));
//console.log(web3);
web3.eth.defaultAccount = window.web3.eth.defaultAccount;
var abi=[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_recipient","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_spender","type":"address"},{"name":"_owner","type":"address"}],"name":"allowance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}];
var contractAddress = "0xd2b0015405ca5645372a7c1f0e1994a1b50509e5";
var contract = window.web3.eth.contract(abi).at(contractAddress);

contract.name(
{
  from:web3.eth.defaultAccount,
  gas:4000000},function (error, result){ 
      if(!error){
          console.log(result);
      } else{
          console.log(error);
      }
});

contract.transfer(
    //'0x7003aE35B84486bC597e36618580539C7280ca5C',
    '0xc78e97c33f22ef5c79Dfc5210556b4a1338e5C3F',
    100,
    {
        from:window.web3.eth.defaultAccount,
        gas:4000000
    }, function (error, result){ 
          if(!error){
              console.log(result);
          } else{
              console.log(error);
          }
    }
);
contract.balanceOf(
 '0xc78e97c33f22ef5c79Dfc5210556b4a1338e5C3F',
 {
   from:web3.eth.defaultAccount,
   gas:4000000},function (error, result){ 
       if(!error){
           console.log(result);
       } else{
           console.log(error);
       }
});
contract.balanceOf(
 '0x7003aE35B84486bC597e36618580539C7280ca5C',
 {
   from:web3.eth.defaultAccount,
   gas:4000000},function (error, result){ 
       if(!error){
           console.log(result);
       } else{
           console.log(error);
       }
});
