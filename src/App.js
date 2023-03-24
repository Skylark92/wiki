import axios from "axios";
import { useEffect, useState } from "react";
import { WikiListContext } from "./context/WikiListContext";
import Router from "./router/Router";
import "./App.css";

function App() {
  const [wikiList, setWikiList] = useState([]);

  useEffect(() => {
    // 최초 실행 시 전체 데이터 받기
    axios.get("http://localhost:8080/wiki")
      .then(res => {
        setWikiList(res.data);
      })
  }, [])

  return (
    <div className="app">
      <WikiListContext.Provider value={{ wikiList, setWikiList }}>
        <Router />
      </WikiListContext.Provider>
    </div>
  );
}
export default App;
