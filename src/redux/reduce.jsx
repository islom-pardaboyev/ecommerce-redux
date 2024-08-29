import toast from "react-hot-toast";
import { ACTIONS } from "./actions";

const initialState = {
  product: [],
  showSideBar: false,
  filteredProducts: [],
  savedProducts: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_SIDEBAR:
      return {
        ...state,
        showSideBar: !state.showSideBar,
      };
    case ACTIONS.GET_ALL_DATA:
      return {
        ...state,
        product: action.payload,
        filteredProducts: action.payload,
        savedProducts: [],
      };
    case ACTIONS.SAVE_TO_CART:
      const product = state.product.find((item) => item.id === action.payload);
      if (
        product &&
        !state.savedProducts.some((item) => item.id === action.payload)
      ) {
        toast.success("Successfully Saved!");
        return {
          ...state,
          savedProducts: [...state.savedProducts, { ...product, amount: 1 }],
        };
      } else {
        toast.error("This product already exists!");
        return state;
      }
    case ACTIONS.INCREASE_AMOUNT:
      return {
        ...state,
        savedProducts: state.savedProducts.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                amount:
                  item.amount === item.rating.count
                    ? item.amount
                    : item.amount + 1,
              }
            : item
        ),
      };
    case ACTIONS.DECREASE_AMOUNT:
      return {
        ...state,
        savedProducts: state.savedProducts.map((item) =>
          item.id === action.payload
            ? { ...item, amount: item.amount <= 1 ? item.amount : item.amount - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};
