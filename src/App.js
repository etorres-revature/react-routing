import { Switch, Route, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/quotes" />
      </Route>
      <Route exact path="/quotes">
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteID">
        <QuoteDetail />
      </Route>
      <Route path="/new-quote">
        <NewQuote />
      </Route>
    </Switch>
  );
}

export default App;
