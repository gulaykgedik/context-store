import { Link } from "react-router-dom";
import { PiShoppingBagFill } from "react-icons/pi";
import { ProductContext } from "../context/productContext";
import { useContext, useEffect, useState } from "react";
import api from "../api";
const Header = () => {
  const { selectedCategory, setSelectedCategory } = useContext(ProductContext);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api
      .get("/products/categories")
      .then((res) => setCategories(["all", ...res.data]));
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-4 py-3">
      <div className="container-fluid">
        <Link className="navbar-brand fs-1 d-flex align-items-center gap-3 text-danger">
          <PiShoppingBagFill />
          <span className="text-dark fw-bolder fs-2" to="/">
            ShopVerse
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0 align-items-center me-5 ms-auto">
            <li className="nav-item">
              <Link className="nav-link fs-5" aria-current="page" to="/">
                Ana Sayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/sepet">
                Sepet Sayfası
              </Link>
            </li>
            <li className="nav-item dropdown fs-5 ">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Katagoriler
              </Link>
              <ul className="dropdown-menu">
                <li>
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedCategory(category)}
                      className="dropdown-item"
                    >
                      {category}
                    </button>
                  ))}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
