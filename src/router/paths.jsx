import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Sucess from "../pages/Sucess";

const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sucess" element={<Sucess />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;
