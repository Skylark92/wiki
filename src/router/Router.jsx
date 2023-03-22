import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p>main</p>} />
        <Route path="/wiki/*" element={<p>wiki</p>} />
      </Routes>
    </BrowserRouter>
  )
}
