import { Switch, Route } from "react-router-dom";
import Header from "./component/Header";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/products/:productID">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

//the-domain.com/welcome => Welcome Component
//the-domain.com/prdoucts => Product Component
//the-domain.com/product-detail/<any value> => Product Detail Component
