import { useEffect, useState } from "react";
import "./blogs.css";
function Blogs() {
  let [load, setLoad] = useState(true);

  function Newpage() {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }

  useEffect(() => {
    Newpage();
  }, []);

  if (load) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="blogs">
      <h1>Blogs</h1>
    </div>
  );
}

export default Blogs;
