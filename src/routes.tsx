import { Routes, Route } from "react-router-dom";
import { Items } from "./pages/items";
import { Bills } from "./pages/bills";
import { Home } from "./pages/home";

const mainRoutes = () => {
  return(
    <Routes>
      <Route
        path="/"
        element={ <Home /> } />
      <Route
        path="/bills"
        element={ <Bills /> } />
      <Route
        path="/items"
        element={ <Items /> } />
    </Routes>
  );
}

export default mainRoutes;
