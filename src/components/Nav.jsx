import { NavLink, useLocation } from "react-router";

const nav = [
  { label: "Web3.0", path: "/web3/" },
  { label: "Blockchain", path: "/web3/blockchain/" },
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
