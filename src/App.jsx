import "./App.css";
import Blockchain from "./components/Blockchain";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router";
import Web3 from "./components/Web3";
import SmartContracts from "./components/SmartContracts";
import Solidity from "./components/Solidity";
import Dapp from "./components/Dapp";
import CryptoWallets from "./components/CryptoWallets";

const Routing = () => {
  return (
    <Routes>
      <Route index path="/web3/" element={<Web3 />} />
      <Route path="/web3/blockchain/" element={<Blockchain />} />
      <Route path="/web3/smart-contracts/" element={<SmartContracts />} />
      <Route path="/web3/solidity/" element={<Solidity />} />
      <Route path="/web3/dapp/" element={<Dapp />} />
      <Route path="/web3/crypto-wallets/" element={<CryptoWallets />} />
    </Routes>
  );
};

function App() {
  return (
    <div
      style={{
        width: "90%",
        maxWidth: "600px",
        margin: "auto",
        padding: "75px 0 75px 0",
      }}
    >
      <Nav />
      <Routing />
    </div>
  );
}

export default App;
