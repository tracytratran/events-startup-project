import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ListItemIcon } from "@mui/material";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MobileMenu.module.css";

export default function MobileMenu({ user, onLogout, ticketsCount }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  function handleMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  function handleNavigate(path) {
    navigate(path);
    handleMenuClose();
  }

  function handleLogout() {
    onLogout();
    handleMenuClose();
  }

  return (
    <div className={styles.mobileActions}>
      <IconButton onClick={() => navigate("/my-cart")}>
        <Badge badgeContent={ticketsCount} color="primary">
          <ShoppingCartIcon fontSize="medium" className={styles.cartIcon} />
        </Badge>
      </IconButton>
      <IconButton onClick={handleMenuOpen}>
        <MenuIcon fontSize="medium" className={styles.menuIcon} />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        slotProps={{
          paper: {
            sx: {
              minWidth: "10rem",
              backgroundColor: "#293a7d",
              color: "#fff",
            },
          },
        }}
      >
        <MenuItem
          onClick={() => handleNavigate("/")}
          className={styles.menuItem}
        >
          <ListItemIcon>
            <HomeIcon className={styles.menuIcon} />
          </ListItemIcon>
          Home
        </MenuItem>
        <MenuItem
          onClick={() => handleNavigate("/events")}
          className={styles.menuItem}
        >
          <ListItemIcon>
            <LocalActivityIcon className={styles.menuIcon} />
          </ListItemIcon>
          Events
        </MenuItem>
        {user ? (
          <>
            <MenuItem
              onClick={() => handleNavigate("/my-account")}
              className={styles.menuItem}
            >
              <ListItemIcon>
                <AccountCircleIcon className={styles.menuIcon} />
              </ListItemIcon>
              My Account
            </MenuItem>
            <MenuItem onClick={handleLogout} className={styles.menuItem}>
              <ListItemIcon>
                <LogoutIcon className={styles.menuIcon} />
              </ListItemIcon>
              Sign out
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem
              onClick={() => handleNavigate("/login")}
              className={styles.menuItem}
            >
              <ListItemIcon>
                <AccountCircleIcon className={styles.menuIcon} />
              </ListItemIcon>
              Login
            </MenuItem>
            <MenuItem
              onClick={() => handleNavigate("/register")}
              className={styles.menuItem}
            >
              <ListItemIcon>
                <PersonAddAlt1Icon className={styles.menuIcon} />
              </ListItemIcon>
              Register
            </MenuItem>
          </>
        )}
      </Menu>
    </div>
  );
}
