import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Index from "./page/Index/Index";
import Register from "./page/Register/Register";
const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Index></Index>}></Route>
        <Route path={"/register"} element={<Register></Register>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
