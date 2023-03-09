import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./_component/Homepage";
import Login from "./_component/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/User/login" element={<Login />}></Route>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
