import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={"list"}>List</Link>
        </li>
        <li>
          <Link to={"todo"}>todo</Link>
        </li>
      </ul>

      <Link to={"/dashboard"}>
        <button>GO Dashboard</button>
      </Link>
    </div>
  );
};

export default Nav;
