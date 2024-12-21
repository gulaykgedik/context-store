const Total = ({ basket }) => {
  const totalAmount = basket.reduce((acc, item) => acc + item.amount, 0);
  const totalPrice = basket.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  );
  return (
    <div className="bg-white rounded my-5 border p-4 d-flex flex-column justify-content-between  ">
      <div className="fs-4">
        <p className="">
          Sepette <span className="text-danger fw-bold">{totalAmount}</span>{" "}
          adet ürün var.
        </p>
        <p>
          Toplam fiyat{" "}
          <span className="text-success fw-bold">{totalPrice.toFixed(2)}$</span>
        </p>
      </div>

      <button className="btn btn-warning py-2 px-4 fs-5">
        Siparişi Onayla
      </button>
    </div>
  );
};

export default Total;
