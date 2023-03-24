import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import Wiki from "../pages/Wiki/Wiki";

export default function Router() {
  return (
    <BrowserRouter>
      <header className="app-header">
        <h1 className="app-logo"><Link to="/">위키위키</Link></h1>
      </header>
      <main className="app-main-container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/wiki/:id" element={<Wiki />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
