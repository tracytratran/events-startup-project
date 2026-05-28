import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Link, useNavigate } from "react-router-dom";
import styles from "./WebMenu.module.css";

export default function WebMenu({ user, onLogout, ticketsCount }) {
  const navigate = useNavigate();

  return (
    <div className={styles.actions}>
      <IconButton onClick={() => navigate("/my-cart")}>
        <Badge badgeContent={ticketsCount} color="primary">
          <Tooltip title="My Cart">
            <ShoppingCartIcon fontSize="medium" className={styles.cartIcon} />
          </Tooltip>
        </Badge>
      </IconButton>
      {user ? (
        <>
          <Tooltip title="My Account">
            <AccountCircleIcon
              onClick={() => navigate("/my-account")}
              fontSize="medium"
              className={styles.userIcon}
            />
          </Tooltip>
          <button onClick={onLogout} className={styles.signoutBtn}>
            Sign out
          </button>
        </>
      ) : (
        <>
          <Link to="/login" className={styles.loginBtn}>
            Login
          </Link>
          <Link to="/register" className={styles.registerBtn}>
            Register
          </Link>
        </>
      )}
    </div>
  );
}
