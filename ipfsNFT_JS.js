            import * as fsJSON from 'fs'
            import { create, globSource } from 'ipfs-http-client'
            
            const ipfs = await create()

            let CertPNG_IPFS_CID = ''
            for await (const pngFile_CertNFT of ipfs.addAll(globSource('/mnt/d/Avet/css/Openssl-certificate-generator/forPngNft/forPng', '**/*'))) {
                    console.log(pngFile_CertNFT)
                    CertPNG_IPFS_CID = pngFile_CertNFT.cid
            }

            const CertPNG_IPFS_URI = 'ipfs://'+CertPNG_IPFS_CID

            const CertNFT_IPFS_json = {
                    'description': 'CertNFT uploaded via local IPFS',
                    'image': CertPNG_IPFS_URI,
                    'name': 'CertNFT-IPFS-local'
            }
            console.log(CertNFT_IPFS_json)

            const jsonString_CertNFT_IPFS = JSON.stringify(CertNFT_IPFS_json)
                fsJSON.writeFile('/mnt/d/Avet/css/Openssl-certificate-generator/forPngNft/forNft/CertNFT_IPFS_json.json', jsonString_CertNFT_IPFS, err => {
                    if (err) {
                            console.log('Error create json file', err)
                    } else {
                            console.log('json created successfully')
                    }
            })

            let ipfsURI_CertNFT = ''
            for await (const ipfsURI_CertNFT of ipfs.addAll(globSource('/mnt/d/Avet/css/Openssl-certificate-generator/forPngNft/forNft','**/*'))) {
            console.log('ipfs.io/ipfs/'+ipfsURI_CertNFT.cid)
            }
        