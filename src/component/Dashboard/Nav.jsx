import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
        backgroundColor: "black",
        height: "100vh",
        // width: "40%",
        padding: "0 30px",
        position: "fixed",
        left: "0",
        top: "0",
        zIndex: "100",
      }}
    >
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flexDirection: "column",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={"users"}>users</Link>
        </li>
        <li>
          <Link to={"settings"}>settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
