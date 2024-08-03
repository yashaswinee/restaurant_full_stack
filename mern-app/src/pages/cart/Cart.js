import React from "react";
import { useCartState, useDispatch } from "../../components/ContextReducer";
import Delete from "@mui/icons-material/Delete";

const Cart = () => {
  let data = useCartState();
  let dispatch = useDispatch();

  let totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div>
      {console.log(data)}
      <div className="gofood__mycart">
        <div className="gofood__mycart-container">
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th></th>
                <th>name</th>
                <th>Quantity</th>
                <th>Options</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((food, index) => (
                <tr>
                  <th scope="row"> {index + 1}</th>
                  <td>{food.name}</td>
                  <td>{food.qty}</td>
                  <td>{food.size}</td>
                  <td>{food.price}</td>
                  <td>
                    <button type="button" className="btn p-0">
                      <Delete
                        onClick={() => {
                          dispatch({ type: "REMOVE", index: index });
                        }}
                      ></Delete>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <h1 className="fs-2">Total Price: ₹{totalPrice}/-</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
