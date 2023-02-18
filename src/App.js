import "./App.css";
import { Link } from "react-router-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/nav";
import Home from "./components/pages/home/home";
import Blogs from "./components/pages/blogs/blogs";
import Services from "./components/pages/services/serv";
import { createContext, useEffect, useState } from "react";
import BlogsDetail from "./components/pages/moredetails/blogs";
let ProvideData = createContext();

function App() {
  let [data, setData] = useState([]);

  async function GetData(url) {
    let response = await fetch(url);
    let data = await response.json();
    setData(data);
  }

  useEffect(() => {
    GetData("https://fakestoreapi.com/products");
  }, []);

  return (
    <BrowserRouter>
      <ProvideData.Provider value={data}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/blogs" element={<Blogs></Blogs>}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/blogs/:id" element={<BlogsDetail />}></Route>
          </Routes>
        </div>
      </ProvideData.Provider>
    </BrowserRouter>
  );
}

export { App, ProvideData };
