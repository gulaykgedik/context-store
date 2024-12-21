import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import Card from "../components/card";
import Loader from "../components/Loader";

const Home = () => {
  const { products, setProducts, selectedCategory } =
    useContext(ProductContext);

  return (
    <div className="mt-4 mb-5 container">
      <h1>{products.length > 0 && products.length + " ürün bulundu"} </h1>
      <h2>
        {selectedCategory != "all" && selectedCategory + " için sonuçlar"}
      </h2>

      <>
        {products.length > 0 ? (
          <div className="wrapper-card">
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </>
    </div>
  );
};

export default Home;
