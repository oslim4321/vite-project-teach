import { useParams } from "react-router-dom";
import { productList } from "../../product";

const SingleProductPage = () => {
  const { id } = useParams();
  const container = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  };
  const imageStyle = {
    height: "50%",
    width: "100%",
  };

  console.log(id);
  const filterd = productList.find((item) => item.id === Number(id));

  const { id: productId, image, title, description, price } = filterd;
  return (
    <div>
      <div style={container}>
        <div
          key={productId}
          style={{
            // width: "300px",
            // height: "400px",
            border: "1px solid grey",
          }}
        >
          <img src={image} alt="" style={imageStyle} />
          <h1>{title}</h1>
          <p>{description}</p>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
