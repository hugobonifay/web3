import { NavLink, useLocation } from "react-router";

const nav = [
  { label: "Web3.0", path: "/web3/" },
  { label: "Blockchain", path: "/web3/blockchain/" },
  { label: "Smart Contracts", path: "/web3/smart-contracts/" },
  { label: "Solidity", path: "/web3/solidity/" },
  { label: "dApps", path: "/web3/dapp/" },
  { label: "Crypto Wallets", path: "/web3/crypto-wallets/" },
];

const Nav = () => {
  const { pathname } = useLocation();

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <header>
      <nav>
        {nav.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={isActive(item.path) ? "a-active" : ""}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Nav;
