import { Fragment } from "react";
import { useParams } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <div>QuoteDetail Page</div>
      <p>{params.quoteID}</p>
    </Fragment>
  );
};

export default QuoteDetail;
