import React, { useEffect, useRef, useState } from "react";
import "./cards.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartState, useDispatch } from "../ContextReducer";

const Cards = ({ foodItem, options }) => {
  let pricekeys = Object.values(options);
  let title = foodItem.title;
  let image = foodItem.img;
  let description = foodItem.description;
  let priceRef = useRef(0);

  let data = useCartState();
  let dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  let finalPrice = qty * parseInt(size.split(",")[1]); // final price of each food item
  const handleCart = async () => {
    let food = [];
    for (let item of data) {
      if (item.id === foodItem._id && item.size === size) {
        food = item;
        break;
      }
    }
    if (food.length != 0) {
      await dispatch({
        type: "UPDATE",
        id: foodItem._id,
        price: finalPrice,
        qty: qty,
      });
      return;
    }
    await dispatch({
      type: "ADD",
      id: foodItem._id,
      name: foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
    return;
  };
  useEffect(() => {
    // to call this when we refer to priceRef - this update the ui
    setSize(priceRef.current.value);
  }, []);

  return (
    <div>
      <div className="card" style={{ height: "35rem", maxWidth: "450px" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>

          <div className="card__selectables">
            <div className="card__selectables-quantity">
              <select onChange={(e) => setQty(e.target.value)}>
                {Array.from(Array(10), (e, i) => {
                  return (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="card__selectables-portions">
              <select
                ref={priceRef}
                onChange={(e) => {
                  setSize(e.target.value);
                }}
              >
                {pricekeys.map((item) => {
                  return (
                    <option key={item} value={item}>
                      {item[0]} - {item[1]}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <hr />
          <div className="footer">
            <div className="card__selectables-cart">
              <ShoppingCartIcon onClick={handleCart} />
            </div>

            <div className="d-inline h-100">total: ₹{finalPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
