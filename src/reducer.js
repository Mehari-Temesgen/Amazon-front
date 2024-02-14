export const initialState = {
  bascket: [],
  user: null,
};
//this is action listener means which button click
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, bascket: [...state.bascket, action.item] };
    case "REMOVE_FROM_BASKET":
      const index = state.bascket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.bascket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        bascket: newBasket,
      };
    case "EMPTY_BASCKET":
      return {
        ...state,
        bascket: [],
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};
export default reducer;
