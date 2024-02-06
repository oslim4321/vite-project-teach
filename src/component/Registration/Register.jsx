import { Outlet } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h1>This is the registration route</h1>
      <Outlet />
    </div>
  );
};

export default Register;
