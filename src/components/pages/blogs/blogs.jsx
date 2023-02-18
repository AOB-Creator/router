import "./home.css";
import { ProvideData } from "../../../App";
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function Services() {
  let data = useContext(ProvideData);

  return (
    <div className="home">
      <div className="cards">
        {data.map((item, index) => {
          return (
            <div className="card" key={index}>
              <Link to={`/blogs/${item.id}`}>more detailssd</Link>
              <p>{item.category}</p>
              <h4>{item.price}</h4>
              <p className="desc">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
