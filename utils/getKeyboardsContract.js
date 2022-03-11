
import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0xb61E3c94240a0De556e4C45CE494044cc32cC9c9';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
