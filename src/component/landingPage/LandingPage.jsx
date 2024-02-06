import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default LandingPage;
