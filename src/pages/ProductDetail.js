import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  console.log(params.productID);

  return (
    <section>
      <h1>Product Details....</h1>
      <p>{params.productID}</p>
    </section>
  );
};

export default ProductDetail;
