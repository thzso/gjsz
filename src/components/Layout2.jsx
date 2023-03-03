import { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Layout2.module.css";

const Layout2 = ({ windowWidth }) => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <>
      {!open && (
        <div className={styles.menuOpen} onClick={() => setOpen(!open)}>
          <MenuIcon sx={{ fontSize: "34px" }} />
        </div>
      )}

      {open && <Sidebar {...{ open, setOpen, windowWidth }} />}
      <div className="app_outlet">
        <Outlet context={{ windowWidth: windowWidth }}></Outlet>
      </div>
    </>
  );
};

export default Layout2;
