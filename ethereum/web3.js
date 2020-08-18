// config web3 provider
import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // I'm in the browser and metamask is running
  web3 = new Web3(window.ethereum);
  window.ethereum.enable();
} else {
  // I'm on the server OR the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/9c6f9fd2d50d40949bc67fa7ba3066fe"
  );
  web3 = new Web3(provider);
}

export default web3;
