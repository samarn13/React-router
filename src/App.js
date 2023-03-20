import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//import layout
import MainLayout from "./layout/MainLayout";
import ProductLayout from "./layout/ProductLayout";

//import pages
import Home from "./page/HomePage";
import About from "./page/AboutPage";
import ProductsPage from "./page/ProductsPage";
import ProductDetailPage, {
  loader as deteilLoader,
} from "./page/ProductDetailPage";

import { productsLoader } from "./page/ProductsPage";
import NotFound from "./component/NotFound";
import ErrorPage from "./component/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<NotFound />}>
      <Route index element={<Home />} />
      <Route path="products" element={<ProductLayout />}>
        {/* <Route index element={<ProductsPage />} /> */}
        <Route index element={<ProductsPage />} loader={productsLoader} />
        <Route
          path=":id"
          element={<ProductDetailPage />}
          loader={deteilLoader}
          errorElement={<ErrorPage />}
        />
      </Route>
      <Route path="about" element={<About />} />
    </Route>
  )
);
const App = () => <RouterProvider router={router} />;

export default App;
