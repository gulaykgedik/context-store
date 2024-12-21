import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="text-center fs-4 fw-bold">
      <p>Sepete bir ürün ekleyiniz </p>

      <Link to="/" className="btn btn-primary">
        Ürünlere git
      </Link>
    </div>
  );
};

export default Info;
