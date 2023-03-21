import {
  Form,
  Link,
  useLoaderData,
  useSearchParams,
  useSubmit,
} from "react-router-dom";
import { getProducts } from "../ProductsData";
import "../App.css";

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
      <Form id="search-form" role={"search"}>
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
          <input id="reset-bt" type={"reset"} onClick={resetSearch} />
        </fieldset>
      </Form>

      <hr id="h" />
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
