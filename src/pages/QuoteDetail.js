import { Fragment } from "react";
import { Route, useParams, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

import { DUMMY_QUOTES } from "./quotes";

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteID);

  if (!quote) {
    return <p>No quotes found with that ID.</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route exact path={`/quotes/${params.quoteID}`}>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteID}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteID}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
