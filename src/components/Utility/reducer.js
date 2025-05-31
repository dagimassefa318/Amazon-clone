import { Type } from "./action.type";
const savedBasket = JSON.parse(localStorage.getItem("basket")) || [];
export const initializeState = {
  basket: savedBasket,
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      // check if the item exists
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );
      if (!existingItem) {
        const updatedBasket = [...state.basket, { ...action.item, amount: 1 }];

        // Save the updated basket to local storage
        localStorage.setItem("basket", JSON.stringify(updatedBasket));

        return {
          ...state,
          basket: updatedBasket, // Update the state with the new basket
        };
      } else {
        // If the item exists, increase its amount
        const updatedBasket = state.basket.map((item) => {
          return item.id === action.item.id
            ? { ...item, amount: item.amount + 1 } // Increase amount by 1
            : item;
        });

        return {
          ...state,
          basket: updatedBasket,
        };
      }

    case Type.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];

      if (index >= 0) {
        if (newBasket[index].amount > 1) {
          newBasket[index] = {
            ...newBasket[index],
            amount: newBasket[index].amount - 1,
          };
        } else {
          newBasket.splice(index, 1);
        }
      }
      localStorage.setItem("basket", JSON.stringify(newBasket));
      return {
        ...state,
        basket: newBasket,
      };

    case Type.EMPTY_BASKET:
      // Empty the basket and clear it from local storage
      localStorage.setItem("basket", JSON.stringify([]));
      return {
        ...state,
        basket: [], // Set the basket to an empty array
      };

    default:
      return state; // Return the current state by default if no case matches
  }
  }