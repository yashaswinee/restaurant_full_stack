import React from "react";
import "./cards.css";

const Items = [""];

const Cards = ({ image, description }) => {
  return (
    <div>
      <div className="card" style={{ height: "35rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">{description}</p>

          <div className="card__selectables">

            <div className="card__selectables-quantity">
              <select>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
            </div>


            <div className="card__selectables-portions">
              <select>
                <option value="half">Half</option>
                <option value="full">Full</option>
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
