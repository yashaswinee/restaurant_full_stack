import React from "react";
import "./cards.css";

const Items = [""];

const Cards = ({ title, image, description, options }) => {

  let pricekeys = Object.values(options)

  return (
    <div>
      <div className="card" style={{ height: "35rem", maxWidth: "450px" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>

          <div className="card__selectables">
            <div className="card__selectables-quantity">
              <select>
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
              <select defaultValue="">
                <option value="">select a size</option>
                {pricekeys.map((item) => {
                  return <option key={item} value={item}>{item[0]} - {item[1]}</option>
                })}
              </select>
            </div>
          </div>

          <div className="d-inline h-100">Total Price</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
