import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wiki from "../pages/Wiki/Wiki";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p>main</p>} />
        <Route path="/wiki/*" element={<Wiki />} />
      </Routes>
    </BrowserRouter>
  )
}
