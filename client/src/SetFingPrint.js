
import $ from "jquery";
import Web3 from 'https://cdn.esm.sh/v58/web3@1.6.1/es2021/web3.js'
import GetAccount from "./connectToMetamask";
const web3 = new Web3(window.web3.currentProvider);
const { ethereum } = window;
let accounts =[];

//Smart contract functions
export default async function registerSetFingPrint(FingPrint, contractAddress, abi ) {
	//contract instance
	abi = JSON.parse(abi);
	let contract = await new web3.eth.Contract(abi, contractAddress);
	
	await GetAccount().
  		then((e) => {accounts.push(e);});
  		let account = accounts[0];
  	
	let info = $("#newFingPrint").val();
  	contract.methods.setFingPrint(FingPrint).send( {from: account}).then( function(tx) {
    console.log("Transaction: ", tx);
  });
  $("#newFingPrint").val('');
}

