import { useLocation, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function MainNavigation(props) {
  const location = useLocation();

  return (
    <header className="fixed flex items-center z-50 justify-between px-[10vw] bg-theme-gray-500 h-20 bg-opacity-70 w-screen duration-300 border-b border-gray-400/50">
      <h3 className="text-white text-xl sm:text-2xl">Luke</h3>
      <nav className="flex gap-4 sm:gap-8 sm:text-xl items-center justify-center h-full">
        <HashLink
          replace
          to="/#top"
          className={`white-button h-full flex items-center border-y-4 border-y-transparent ${
            location.pathname === "/" && "border-b-theme-red text-white"
          }`}
        >
          Home
        </HashLink>
        <Link
          replace
          to="/repCounter"
          className={`white-button h-full flex items-center border-y-4 border-y-transparent ${
            location.pathname === "/about" && "border-b-theme-red text-white"
          }`}
        >
          About
        </Link>
        <Link
          replace
          to="/projects/algoblock"
          className={`white-button h-full flex items-center border-y-4 border-y-transparent ${
            location.pathname.startsWith("/projects") && "border-b-theme-red text-white"
          }`}
        >
          Projects
        </Link>
      </nav>
    </header>
  );
}

export default MainNavigation;
