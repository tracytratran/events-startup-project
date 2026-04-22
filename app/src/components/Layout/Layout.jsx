import { Link, Outlet } from "react-router-dom";
import hyfLogo from "../../assets/hyf.svg";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
