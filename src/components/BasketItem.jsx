import { useContext } from "react";
import { BasketContext } from "../context/basketContext";

const BasketItem = ({ item }) => {
  const { addToBasket, removeFromBasket, decreaseAmount } =
    useContext(BasketContext);
  return (
    <div className="d-flex align-items-center gap-3 bg-body p-3 rounded">
      <div>
        <img
          src={item.image}
          height={80}
          width={80}
          className="object-fit-contain"
        />
      </div>
      <div className="w-100">
        <div>
          <h5>{item.title.slice(0, 40)}</h5>
          <p className="text-secondary">{item.category}</p>
        </div>

        <div className="d-flex justify-content-end align-items-center gap-4">
          <span className="text-success text-center fs-5 fw-bold">
            {(item.price * item.amount).toFixed(2)}$
          </span>
          <div className="d-flex gap-3">
            <button onClick={() => addToBasket(item)}>+</button>
            <button onClick={() => decreaseAmount(item.id)}>-</button>
          </div>

          <h4>{item.amount}</h4>

          <button
            onClick={() => removeFromBasket(item.id)}
            className="bg-danger"
          >
            {" "}
            Sil{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
