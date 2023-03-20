import { useLoaderData } from "react-router-dom";
import BreadCrumbs from "../component/BreadCrumbs";
import { getProduct } from "../ProductsData";

const ProductDetailPage = () => {
  // const product = {
  //   cateory: "Sporting Goods",
  //   id: "1234",
  //   name: "Football",
  //   price: 49.99,
  //   stocked: false,
  //   detail: "Very Good product.",
  // };
  const product = useLoaderData();

  return (
    <>
      <div className="item">
        <BreadCrumbs />
        {product ? (
          <>
            <h2>{product.name}</h2>
            <div>
              <span>Id :</span>
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
