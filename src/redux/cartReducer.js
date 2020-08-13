const ADD_CART_LIST = "ADD_CART_LIST";
const REMOVE_CART_LIST = "REMOVE_CART_LIST";
const REMOVE_ITEM_FROM_CART_LIST = "REMOVE_ITEM_FROM_CART_LIST";
const CLEAR_CART = "CLEAR_CART";

const initialState = {
  cartList: [],
};

function addCartList(state, action) {
  let isExistItem = false;

  let items = state.cartList.map((el) => {
    if (+el.id === +action.cart.id) {
      isExistItem = true;
      return { ...action.cart, count: +el.count + 1 };
    }

    return el;
  });

  return isExistItem
    ? { ...state, cartList: items }
    : { ...state, cartList: [...state.cartList, { ...action.cart, count: 1 }] };
}

function removeItemFromCartList(state, action) {
  let isExistItem = false;

  let items = state.cartList.map((el) => {
    if (+el.id === +action.cart.id) {
      isExistItem = true;
      return { ...action.cart, count: +el.count - 1 };
    }

    return el;
  });

  return isExistItem
    ? { ...state, cartList: items }
    : { ...state, cartList: [...state.cartList, { ...action.cart, count: 1 }] };
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_LIST: {
      return addCartList(state, action);
    }

    case REMOVE_CART_LIST: {
      return {
        ...state,
        cartList: [
          ...state.cartList.filter(({ id }) => +id !== +action.cart.id),
        ],
      };
    }

    case REMOVE_ITEM_FROM_CART_LIST: {
      return removeItemFromCartList(state, action);
    }

    

    case CLEAR_CART: {
      return {
        ...state,
        cartList: [],
      };
    }

    default:
      return state;
  }
};

export const setCartList = (cart) => {
  return {
    type: ADD_CART_LIST,
    cart,
  };
};

export const removeCartList = (cart) => {
  return {
    type: REMOVE_CART_LIST,
    cart,
  };
};

export const removeItemFromCart = (cart) => {
  return {
    type: REMOVE_ITEM_FROM_CART_LIST,
    cart,
  };
};

export const clearAllCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export default cartReducer;
