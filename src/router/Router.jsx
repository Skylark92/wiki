import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import Wiki from "../pages/Wiki/Wiki";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/wiki/*" element={<Wiki />} />
      </Routes>
    </BrowserRouter>
  )
}
