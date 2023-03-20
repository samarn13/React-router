import { Outlet } from "react-router-dom";

const ProductLayout = () => {
  return (
    <>
      <h1>
        products
        <Outlet />
      </h1>
    </>
  );
};

export default ProductLayout;
