import "./App.css";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import Blogs from "./components/blogs/blogs";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  let [products, setProducts] = useState();
  let [loading, setLoad] = useState(true);
  async function FetchData(url) {
    let response = await fetch(url);
    let data = await response.json();
    setProducts(data);
    setLoad(!loading);
  }

  useEffect(() => {
    FetchData("https://jsonplaceholder.typicode.com/todos");
  }, []);

  if (loading) {
    return <h1>Loading..</h1>;
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
