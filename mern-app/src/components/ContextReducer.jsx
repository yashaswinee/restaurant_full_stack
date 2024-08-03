import React, { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          price: action.price,
          qty: action.qty,
          size: action.size,
        },
      ];
    case "REMOVE":
      let stateCopy = [...state];
      stateCopy.splice(action.index, 1);
      return stateCopy;
    case "UPDATE":
        let updateArr = [...state];
        updateArr.find((food, index) =>{
            if(food.id === action.id){
                updateArr[index] = {...food, qty: parseInt(action.qty), price: action.price}
                return updateArr;
            }
        })
      return updateArr;
    default:
      console.log("Error in reducer");
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCartState = () => useContext(CartStateContext);
export const useDispatch = () => useContext(CartDispatchContext);
export default CartProvider;
