import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {
  const location = useLocation();

  return (
    <Layout>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />} />
        <Route path="/projects/:projectName" element={<Project />} />
      </Routes>
    </Layout>
  );
}

export default App;
