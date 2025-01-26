import { useState } from "react";
import "./App.css";
import Blockchain from "./components/Blockchain";

const Page = ({ page }) => {
  switch (page) {
    case 0:
      return <Blockchain />;
    default:
      return null;
  }
};

function App() {
  const [page, setPage] = useState(0);

  return (
    <div
      style={{
        width: "90%",
        maxWidth: "600px",
        margin: "auto",
        padding: "75px 0",
      }}
    >
      <Page page={page} />
    </div>
  );
}

export default App;
