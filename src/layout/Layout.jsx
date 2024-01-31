import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <div className="bg-gradient-to-b from-primary to-secondary sticky top-0">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}
