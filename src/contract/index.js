import abi from "../abi/KYC.json";
import { CONTRACT_ADDRESS, PROVIDER_URL } from "src/constants";

const Web3 = require("web3");
const web3Reader = new Web3(PROVIDER_URL);
const contractReader = new web3Reader.eth.Contract(abi, CONTRACT_ADDRESS);

export const verifyProof = async (object) => {
  try {
    const res = await contractReader.methods
      .verifyProof(
        object.optionName,
        object.pi_a,
        object.pi_b,
        object.pi_c,
        object.input
      )
      .call();
    return res;
  } catch (err) {
    console.log(err);
    return -1;
  }
};

export default contractReader;
