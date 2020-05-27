const initialState = {
  characters: [],
  isFeatching: false,
  errors: "",
};

export const reducer = (state = initialState, action) => {
  switch(action.type){
    default:
      return state;
    case "FETCH_CHARACTER_START":
      return {...state, isFeatching: true, characters: [], errors: ""}
    case "FETCH_CHARACTER_SUCCESS":
      return {
        ...state,
        isFetching: false,
        characters: action.payload,
        errors: "",
      };
    case "FETCH_CHARACTER_FALURE":
      return {
        ...state,
        isFeatching: false,
        characters: [],
        errors: action.payload,
      };
  }
};