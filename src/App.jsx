import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import MoreInfo from "./pages/MoreInfo/moreInfo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moreInfo" element={<MoreInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
