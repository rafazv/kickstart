import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xcF81D5bD653DDc0a6Bd847f93Cbe580B61673d6d"
);

export default instance;
