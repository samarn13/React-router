import { Outlet } from "react-router-dom";
import "../App.css";

const ProductLayout = () => {
  return (
    <>
      <div className="head">
        <div className="title-products">Products</div>
        <Outlet />
      </div>
    </>
  );
};

export default ProductLayout;
