import QRCodeStyling from 'qr-code-styling';

export default function QrCodeToSvgSave(tx){
  let newpop = {
    "description": "OnChain NFT SVG", 
    "external_url": "", 
    "image": "data:image/svg+xml;base64,<Base64_SVG>", 
    "name": "OnChainNFT",
    "attributes": [ {
      "trait_type": "Certificate",
      "value": "SelfSignNFTCert"
    }], 
  };
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

//qrCode.append(document.getElementById("canvassvg"));
qrCode.download({ name: "qrcode", extension: "svg" });

//taki erku toghy base64encoda anum, aranc dimaci en zrtiki 
const s = new XMLSerializer().serializeToString(qrCode._svg)
const encodedData = window.btoa(s);
console.log(encodedData);
/*let base= function getImageDataURL(xml) {
  return "data:image/svg+xml;base64," + btoa(decodeURI(encodeURIComponent(xml)));

}
console.log(base(qrCode._svg));*/
};

