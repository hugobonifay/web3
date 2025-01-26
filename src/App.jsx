import "./App.css";
import Blockchain from "./components/Blockchain";
import Nav from "./components/Nav";
import { Outlet, Route, Routes, useLocation } from "react-router";
import Web3 from "./components/Web3";
import SmartContracts from "./components/SmartContracts";
import Solidity from "./components/Solidity";
import Dapp from "./components/Dapp";
import CryptoWallets from "./components/CryptoWallets";
import { useEffect } from "react";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/web3/" element={<Web3 />} />
        <Route path="/web3/blockchain/" element={<Blockchain />} />
        <Route path="/web3/smart-contracts/" element={<SmartContracts />} />
        <Route path="/web3/solidity/" element={<Solidity />} />
        <Route path="/web3/dapp/" element={<Dapp />} />
        <Route path="/web3/crypto-wallets/" element={<CryptoWallets />} />
      </Route>
    </Routes>
  );
};

export default App;
