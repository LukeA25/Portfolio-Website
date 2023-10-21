import { useState, useEffect } from "react";
import Footer from "./Footer";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setNavActive(true);
      else setNavActive(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <MainNavigation navActive={navActive} />
      <div
        className={`backdrop-blur-md fixed top-0 h-20 inset-0 z-40 ${!navActive && "hidden"}`}
      />
      <main>
        {props.children}
        <Footer />
      </main>
    </div>
  );
}

export default Layout;
