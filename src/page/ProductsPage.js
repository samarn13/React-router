import {
  Form,
  Link,
  useLoaderData,
  useSearchParams,
  useSubmit,
} from "react-router-dom";
import { getProducts } from "../ProductsData";

// const initData = [
//   {
//     category: "Sporting Goods",
//     id: "1234",
//     name: "Football",
//     price: 49.99,
//     stocked: true,
//   },
//   {
//     category: "Sporting Goods",
//     id: "3444",
//     name: "Baseball",
//     price: 9.99,
//     stocked: true,
//   },
//   {
//     category: "Sporting Goods",
//     id: "1344",
//     name: "Basketball",
//     price: 29.99,
//     stocked: false,
//   },
//   {
//     category: "Electronecs",
//     id: "3422",
//     name: "iPod Touch",
//     price: 99.99,
//     stocked: true,
//   },
//   {
//     category: "Electronecs",
//     id: "2567",
//     name: "iPhone 5",
//     price: 399.99,
//     stocked: false,
//   },
//   {
//     category: "Electronecs",
//     id: "3214",
//     name: "Nexus 7",
//     price: 199.99,
//     stocked: true,
//   },
//   {
//     category: "Kitchenware",
//     id: "1414",
//     name: "Pot",
//     price: 9.99,
//     stocked: true,
//   },
//   {
//     category: "Kitchenware",
//     id: "1456",
//     name: "Pan",
//     price: 6.99,
//     stocked: true,
//   },
// ];

const ProductsPage = () => {
  //const products = initData;
  const products = useLoaderData();
  const list = products.map((e) => (
    <Link key={e.id} to={e.id}>
      <li title={e.category}>{e.name}</li>
    </Link>
  ));

  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  console.log(q);

  const submit = useSubmit();
  const resetSearch = (e) => {
    const param = searchParams.get("q");
    if (param) {
      searchParams.delete("q");
      setSearchParams(searchParams);
    }
  };

  return (
    <>
      <Form id="searrch-form" role={"search"}>
        <fieldset>
          <legend>Search</legend>
          <input
            defaultValue={q}
            id="q"
            placeholder="Search"
            type={"search"}
            name="q"
            onChange={(event) => {
              const isFistSearch = q == null;
              submit(event.currentTarget.form, { replace: !isFistSearch });
            }}
          />
          <input type={"reset"} onClick={resetSearch} />
        </fieldset>
      </Form>

      <hr />
      {products.length ? (
        <ul className="list-item">{list}</ul>
      ) : (
        "No product available"
      )}
    </>
  );
};
export default ProductsPage;
// export const productsLoader = async () => {
//   const res = await getProducts();
//   return res;
// };

export async function productsLoader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");

  const products = await getProducts(q);
  return products;
}
