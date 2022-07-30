import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home/screen/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />

      {/* <Route path="*" element={<Error404 />} /> */}
    </Routes>
  );
}

export default App;
