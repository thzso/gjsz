import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import CancelIcon from "@mui/icons-material/Cancel";

const Sidebar = ({ windowWidth, open, setOpen }) => {
  return (
    <div className={styles.sideBar}>
      {windowWidth < 767 && open && (
        <div className={styles.menuClose} onClick={() => setOpen(!open)}>
          <CancelIcon sx={{ fontSize: "34px", color: "white" }} />
        </div>
      )}
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeStyle : styles.navLink
        }
        to={"/"}
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeStyle : styles.navLink
        }
        to={"etchings"}
      >
        Etchings
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeStyle : styles.navLink
        }
        to={"paintings"}
      >
        Paintings
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeStyle : styles.navLink
        }
        to={"digital"}
      >
        Digital
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeStyle : styles.navLink
        }
        to={"comics"}
      >
        Comics
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeStyle : styles.navLink
        }
        to={"links&contacts"}
      >
        Links & Contacts
      </NavLink>
    </div>
  );
};

export default Sidebar;
