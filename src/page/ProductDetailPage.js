import { useLoaderData } from "react-router-dom";
import BreadCrumbs from "../component/BreadCrumbs";
import { getProduct } from "../ProductsData";
import "../App.css";

const ProductDetailPage = () => {
  const product = useLoaderData();

  return (
    <>
      <div className="item">
        <BreadCrumbs />
        {product ? (
          <>
            <h2>{product.name}</h2>
            <div>
              <span>ID :</span>
              {product.id}
            </div>
            <div>
              <span>Category :</span>
              {product.category}
            </div>
            <div>
              <span>Price :</span>
              {product.price}
            </div>
            {product.stocked ? (
              <div className="info">Available</div>
            ) : (
              <div className="danger">Out of stock</div>
            )}
            <div>
              <span>Detail :</span>
              {product.detail}
            </div>
          </>
        ) : (
          <div>No such product!</div>
        )}
      </div>
    </>
  );
};

export default ProductDetailPage;
export async function loader({ params }) {
  const res = await getProduct(params.id);
  return res;
}
