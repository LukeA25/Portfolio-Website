import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function MainNavigation(props) {
  const location = useLocation();
  const [scroll, setScroll] = useState(0);
  const [heights, setHeights] = useState({});

  useEffect(() => {
    if (!location.pathname.startsWith("/projects")) {
      const updateHeights = () => {
        setHeights({
          projects: document.getElementById("projects").offsetTop,
          about: document.getElementById("about").offsetTop,
        });
      };

      updateHeights();

      window.addEventListener("resize", updateHeights);
      return () => window.removeEventListener("resize", updateHeights);
    }
  }, []);

  useEffect(() => {
    if (!location.pathname.startsWith("/projects")) {
      const updateScroll = () => setScroll(window.scrollY);

      window.addEventListener("scroll", updateScroll);
      return () => window.removeEventListener("scroll", updateScroll);
    }
  }, []);

  return (
    <header className="fixed flex items-center z-50 justify-between px-[10vw] bg-theme-gray-500 h-20 bg-opacity-70 w-screen duration-300 border-b border-gray-400/50">
      <h3 className="text-white text-xl sm:text-2xl">Luke</h3>
      <nav className="flex gap-4 sm:gap-8 sm:text-xl items-center justify-center h-full">
        <HashLink
          replace
          to="/#top"
          className={`white-button h-full flex items-center border-y-4 border-y-transparent ${
            location.pathname === "/" &&
            scroll < heights.projects &&
            "border-b-theme-red text-white"
          }`}
        >
          Home
        </HashLink>
        <HashLink
          replace
          to="/#projects"
          className={`white-button h-full flex items-center border-y-4 border-y-transparent ${
            location.pathname.startsWith("/projects")
              ? "border-b-theme-red text-white"
              : scroll >= heights.projects &&
                !(
                  window.innerHeight + Math.round(window.scrollY) >=
                    document.body.offsetHeight || scroll >= heights.about - 80
                ) &&
                "border-b-theme-red text-white"
          }`}
        >
          Projects
        </HashLink>
        <HashLink
          replace
          to="/#about"
          className={`white-button h-full flex items-center border-y-4 border-y-transparent ${
            location.pathname === "/" &&
            (window.innerHeight + Math.round(window.scrollY) >=
              document.body.offsetHeight ||
              scroll >= heights.about - 80) &&
            "border-b-theme-red text-white"
          }`}
        >
          About
        </HashLink>
      </nav>
    </header>
  );
}

export default MainNavigation;
