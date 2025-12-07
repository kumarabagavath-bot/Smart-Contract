import { useState } from "react";
import Web3 from "web3";
import SimpleToken from "./SimpleToken.json";

function App() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);

  const connect = async () => {
    const web3 = new Web3(window.ethereum);
    await window.ethereum.request({ method: "eth_requestAccounts" });

    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);

    const networkId = await web3.eth.net.getId();
    const deployed = SimpleToken.networks[networkId];

    const instance = new web3.eth.Contract(SimpleToken.abi, deployed.address);
    setContract(instance);
  };

  const mint = () => {
    contract.methods.mint(10).send({ from: account });
  };

  return (
    <div>
      <button onClick={connect}>Connect Wallet</button>
      <button onClick={mint}>Mint Token</button>
    </div>
  );
}

export default App;
