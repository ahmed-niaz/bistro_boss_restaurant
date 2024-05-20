import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer";

const Root = () => {
  const location = useLocation();
  const hideFooter = location.pathname.includes("login");
  return (
    <main className="font-inter mx-w-[1920px] mx-auto">
      <Outlet />
      {hideFooter || <Footer />}
    </main>
  );
};

export default Root;
