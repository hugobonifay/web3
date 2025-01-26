import "./App.css";
import Blockchain from "./components/Blockchain";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router";
import Web3 from "./components/Web3";

const Routing = () => {
  return (
    <Routes>
      <Route index path="/web3/" element={<Web3 />} />
      <Route path="/web3/blockchain" element={<Blockchain />} />
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
