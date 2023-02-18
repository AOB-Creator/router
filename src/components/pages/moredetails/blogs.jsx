import { useParams } from "react-router-dom";
import { ProvideData } from "../../../App";
import { useContext } from "react";
import "./new.css";
function BlogsDetail() {
  let params = useParams();
  let products = useContext(ProvideData);
  let onlyproduct = products.filter((item, index) => {
    if (params.id == item.id) {
      return item;
    }
  });
  let [product] = onlyproduct;

  return (
    <div className="detailed">
      <img src={product.image} alt="" />
      <p>{product.description}</p>
    </div>
  );
}

export default BlogsDetail;
