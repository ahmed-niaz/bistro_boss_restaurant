import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";

const Root = () => {
  return (
    <main className="font-inter mx-w-[1920px] mx-auto">
      <Outlet />
      <Footer/>
    </main>
  );
};

export default Root;
