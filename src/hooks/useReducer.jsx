export const initialState = JSON.parse(localStorage.getItem("cartsItem")) || [];

const updateLocalStorage = (state) => {
  localStorage.setItem("cartsItem", JSON.stringify(state));
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id } = action.payload;
      const productInCart = state.findIndex((item) => item.id == id);
      if (productInCart >= 0) {
        const newState = structuredClone(state);
        newState[productInCart].quantity += 1;
        updateLocalStorage(newState);
        return newState;
      } else {
        const newState = [...state, { ...action.payload, quantity: 1 }];
        updateLocalStorage(newState);
        return newState;
      }
    }
    case "REMOVE_FROM_CART": {
      const { id } = action.payload;
      const newState = state.filter((item) => item.id != id);
      updateLocalStorage(newState);
      return newState;
    }
    case "CLEAR_CART": {
      updateLocalStorage([]);
      return [];
    }
  }
};
