# ic-unity-template
 A Unity template for the Internet Computer blockchain with wallet integration and NFT fetching.

Steps to Deploy the IC Unity Project:
1. Download the project files
2. Make sure you have the Dfinity Canister smart contract SDK installed (I'm using version 0.9.3 for this project): https://smartcontracts.org/docs/developers-guide/install-upgrade-remove.html
3. cd into the ic_unity_template folder within the Unity project (this contains the dfx project).
4. Run npm install and make sure all the node modules are installed correctly. You may have to follow specific instructions to make sure the dab-js node module is installed correctly. Instructions can be found here: https://docs.dab.ooo/nft-list/getting-started/
5. Run dfx start --background inside the ic_unity_template folder to start your local IC environment in the background. Run dfx deploy to deploy the IC canister to the local IC environment. Once it is finished deploying, it will tell you a URL that you can visit the project at!
6. To deploy the project to the mainnet public blockchain network, you need to cd into the ic_unity_template folder and run dfx deploy --network=ic Once deployed, it will tell you the canister id of the ic_unity_template_assets canister. You can access the project by going to https://<canister_id>.raw.ic0.app/

NOTE: It is very important you include the "raw" keyword in the URL as Unity files are very large and can only be served using this keyword.

Thanks for reading this far! That's how you deploy the sample Unity project with react-unity-webgl integration in order to make calls between Javascript and C#. I hope you enjoyed reading and wish you the best of luck in your game dev adventures! Feel free to reach me @tommyinvests on twitter. I'm the lead developer of the IC Gallery project :)
