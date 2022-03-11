import "../styles/globals.css";
import { useEffect } from 'react';
import { Toaster } from "react-hot-toast";

const checkEthereumChain = async () => {
  if (window.ethereum) {
    // Reload if chain changes, see <https://docs.metamask.io/guide/ethereum-provider.html#chainchanged>
    window.ethereum.on("chainChanged", (_chainId) => window.location.reload());
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    const rinkebyId = "0x4"; // See <https://docs.metamask.io/guide/ethereum-provider.html#chain-ids>
    if (chainId !== rinkebyId) {
      alert("Please use Rinkeby network");
      setEthereum(window.ethereum);
    }
  }
};

function MyApp({ Component, pageProps }) {
  useEffect(() => checkEthereumChain, [])
  return (
    <>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
