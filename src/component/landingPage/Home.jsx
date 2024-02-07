import { Link } from "react-router-dom";
import { productList } from "../../product";

const Home = () => {
  const container = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  };
  const imageStyle = {
    height: "50%",
    width: "100%",
  };
  return (
    <div style={container}>
      {productList.map((item) => (
        <Link to={`product/${item.id}`} key={item.id}>
          <div
            style={{
              width: "300px",
              height: "400px",
              border: "1px solid grey",
            }}
          >
            <img src={item.image} alt="" style={imageStyle} />
            <h1>{item.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
