
//import $ from "jquery";
import Web3 from 'https://cdn.esm.sh/v58/web3@1.6.1/es2021/web3.js'
const web3 = new Web3(window.web3.currentProvider);
const { ethereum } = window;

//Smart contract functions
export default function registerGetFingPrint(contractAddress, abi) {

	abi = JSON.parse(abi);
	let contract = new web3.eth.Contract(abi, contractAddress);


	contract.methods.getFingPrint().call().then( function( FingPrint ) {
		console.log("FingPrint: ", FingPrint);
		document.getElementById('lastFingPrint').innerHTML = ("FingPrint: ", FingPrint);
	  });
}
