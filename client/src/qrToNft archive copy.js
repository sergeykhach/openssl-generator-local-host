import QRCodeStyling from 'qr-code-styling';
import GetAccount from "./connectToMetamask";
import Web3 from 'web3';
const web3 = new Web3(Web3.givenProvider || 'wss://some.local-or-remote.node:8546');
//const web3 = new Web3(window.web3.currentProvider);
console.log(web3);

let accounts =[];
let contractAddrOwn = "0x68A71aD2FB95a7cf26c6778d7c2825ba915994d4" ;
let abiOwn=[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Minted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "svg",
				"type": "string"
			}
		],
		"name": "mintTo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_baseTokenURI",
				"type": "string"
			}
		],
		"name": "setBaseTokenURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "payee",
				"type": "address"
			}
		],
		"name": "withdrawPayments",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "baseTokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "imageURI",
				"type": "string"
			}
		],
		"name": "formatTokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "dest",
				"type": "address"
			}
		],
		"name": "payments",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "svg",
				"type": "string"
			}
		],
		"name": "svgToImageURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];


function qrC(tx){
  const qrCode = new QRCodeStyling({
    width: `500`,
    height: `500`,
    type: "svg",
    data: tx,
    
    dotsOptions: {
        color: "black", 
        type: "rounded"
    },
    backgroundOptions: {
        color: "white", 
    },
    imageOptions: {
        crossOrigin: "anonymous",
        
    }
});
let normalizedForNFT = new XMLSerializer().serializeToString(qrCode._svg).replace(/"/g, `'`);//sxal a talis baceluc, aranc replace lriv bacum a bayc smart cotr chi anum...

return normalizedForNFT;
}

export default async function QrCodeToNFT(tx){
  let abi = abiOwn;
	let contractAddress = contractAddrOwn;
	let contract = await new web3.eth.Contract(abi, contractAddress);
	
	await GetAccount().
  		then((e) => {accounts.push(e);});
  		let account = accounts[0];
  
 // let svg_norm = await qrC(tx);
 
 let svg_norm = <svg version='1.0' xmlns='http://www.w3.org/2000/svg'
 width='173.000000pt' height='34.000000pt' viewBox='0 0 173.000000 34.000000'
 preserveAspectRatio='xMidYMid meet'>
<g transform='translate(0.000000,34.000000) scale(0.100000,-0.100000)'
fill='#000000' stroke='none'>
<path d='M76 214 c-23 -22 -20 -71 3 -84 24 -12 61 -13 61 -1 0 4 -11 6 -25 4
-19 -4 -27 0 -37 22 -15 34 0 60 36 60 14 -1 26 3 26 7 0 14 -48 8 -64 -8z'/>
<path d='M403 213 c-4 -10 -11 -21 -17 -25 -7 -5 -7 -8 2 -8 6 0 12 -11 12
-24 0 -13 -6 -27 -12 -29 -7 -3 -3 -6 8 -6 18 -1 20 3 16 25 -3 16 1 30 9 35
10 6 10 9 2 9 -7 0 -13 7 -13 16 0 10 6 14 15 10 8 -3 15 -1 15 4 0 17 -30 11
-37 -7z'/>
<path d='M829 181 c25 -28 47 -48 50 -46 7 7 -69 95 -83 95 -6 0 8 -22 33 -49z'/>
<path d='M868 223 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z'/>
<path d='M915 175 c0 -44 3 -55 16 -55 12 0 15 7 11 27 -4 21 -2 25 12 20 10
-4 16 -1 16 8 0 9 -6 12 -15 9 -10 -4 -15 0 -15 15 0 23 34 30 44 9 5 -10 7
-10 12 0 3 6 12 12 21 12 12 0 14 -11 11 -50 -2 -39 0 -50 12 -50 12 0 14 11
12 50 -3 39 -1 50 11 50 9 0 18 -6 20 -12 3 -8 6 -6 6 5 1 15 -10 17 -86 17
l-88 0 0 -55z'/>
<path d='M1156 214 c-23 -22 -20 -71 3 -84 32 -17 61 -12 61 9 0 11 6 22 13
24 6 3 2 6 -10 6 -16 1 -20 -3 -16 -19 8 -31 -34 -26 -49 6 -15 33 0 59 36 59
14 -1 26 3 26 7 0 14 -48 8 -64 -8z'/>
<path d='M275 189 c-16 -6 -17 -8 -3 -8 10 -1 18 -11 20 -28 2 -14 10 -28 18
-31 12 -4 13 -2 3 9 -19 19 -16 47 5 51 15 3 14 5 -3 9 -11 3 -29 2 -40 -2z'/>
<path d='M627 194 c-9 -10 9 -68 23 -72 12 -4 13 -2 3 9 -19 19 -16 47 5 51
14 3 13 5 -5 10 -12 3 -24 4 -26 2z'/>
<path d='M164 176 c-11 -28 1 -51 26 -53 l25 -3 -25 12 -25 12 27 4 c24 3 27
6 18 23 -13 22 -38 25 -46 5z m36 -6 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10
0 6 7 10 15 10 8 0 15 -4 15 -10z'/>
<path d='M228 183 c6 -2 12 -15 12 -28 0 -13 -6 -26 -12 -28 -7 -3 -4 -6 7 -6
18 -1 20 4 17 34 -3 25 -9 35 -21 34 -10 0 -11 -2 -3 -6z'/>
<path d='M345 155 c0 -19 5 -35 10 -35 7 0 9 15 7 35 -2 19 -7 35 -11 35 -3 0
-6 -16 -6 -35z'/>
<path d='M445 155 c0 -19 5 -35 10 -35 7 0 9 15 7 35 -2 19 -7 35 -11 35 -3 0
-6 -16 -6 -35z'/>
<path d='M494 176 c-11 -28 1 -51 26 -53 25 -3 25 -3 3 7 -13 5 -23 16 -23 25
0 9 10 20 23 25 l22 9 -23 0 c-12 1 -25 -5 -28 -13z'/>
<path d='M560 181 c0 -6 7 -8 15 -5 8 4 15 2 15 -4 0 -5 -7 -12 -15 -16 -27
-10 -17 -35 13 -34 27 1 28 3 23 32 -5 22 -13 32 -29 34 -12 2 -22 -1 -22 -7z
m30 -41 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10
-10z'/>
<path d='M684 176 c-11 -28 1 -51 26 -53 l25 -3 -25 12 -25 12 27 4 c24 3 27
6 18 23 -13 22 -38 25 -46 5z m36 -6 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10
0 6 7 10 15 10 8 0 15 -4 15 -10z'/>
<path d='M1254 176 c-11 -28 1 -51 26 -53 l25 -3 -25 12 -25 12 27 4 c24 3 27
6 18 23 -13 22 -38 25 -46 5z m36 -6 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10
0 6 7 10 15 10 8 0 15 -4 15 -10z'/>
<path d='M1318 183 c6 -2 12 -15 12 -28 0 -13 -6 -26 -12 -28 -7 -3 6 -6 28
-6 41 -1 41 -1 35 31 -4 17 -13 34 -21 36 -12 4 -13 2 -2 -9 17 -18 15 -49 -3
-49 -10 0 -15 10 -15 30 0 22 -5 30 -17 29 -11 0 -13 -3 -5 -6z'/>
<path d='M1404 176 c-11 -28 1 -51 26 -53 l25 -3 -25 12 -25 12 27 4 c24 3 27
6 18 23 -13 22 -38 25 -46 5z m36 -6 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10
0 6 7 10 15 10 8 0 15 -4 15 -10z'/>
<path d='M1470 175 c0 -9 7 -18 15 -21 20 -8 19 -21 -2 -27 -17 -4 -17 -5 0
-6 26 -2 33 27 11 45 -17 14 -17 15 -1 10 9 -3 17 -1 17 4 0 6 -9 10 -20 10
-11 0 -20 -7 -20 -15z'/>
<path d='M1535 155 c0 -19 5 -35 10 -35 7 0 9 15 7 35 -2 19 -7 35 -11 35 -3
0 -6 -16 -6 -35z'/>
<path d='M1580 175 c0 -9 7 -18 15 -21 20 -8 19 -21 -2 -27 -17 -4 -17 -5 0
-6 26 -2 33 27 11 45 -17 14 -17 15 -1 10 9 -3 17 -1 17 4 0 6 -9 10 -20 10
-11 0 -20 -7 -20 -15z'/>
<path d='M788 123 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z'/>
</g>
</svg>


  console.log(svg_norm);
//stegh ir metamaskic ir metamaskin a ugharkum
  contract.methods.mintTo(account, svg_norm).send( {from: account}).then( function(px) {
    console.log("Transaction: ", px);
  });
 
}

//qrCode.append(document.getElementById("canvassvg"));
//qrCode.download({ name: "qrcode", extension: "svg" });


//console.log(new XMLSerializer().serializeToString(qrCode._svg));
//console.log(qrCode._svg);

//taki erku toghy base64encoda anum, aranc dimaci en zrtiki 
//const s = new XMLSerializer().serializeToString(qrCode._svg);
//const encodedData = window.btoa(s);
//const replaced =JSON.stringify(qrCode._svg).replace(/"/g, `'`);
//console.log(encodedData);
/*let base= function getImageDataURL(xml) {
  return "data:image/svg+xml;base64," + btoa(decodeURI(encodeURIComponent(xml)));

}
console.log(base(qrCode._svg));*/
