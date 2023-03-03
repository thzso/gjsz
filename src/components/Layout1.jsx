import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
const Layout1 = ({ windowWidth }) => {

  return (
    <>
      <div className="app_outlet">
        <Outlet context={{ windowWidth: windowWidth }}></Outlet>
      </div>

      <Sidebar />
    </>
  );
};

export default Layout1;
