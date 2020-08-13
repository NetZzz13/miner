const SET_LANGUAGE = "SET_LANGUAGE";

const initialState = {
  languageItems: [
    { id: 1, label: "ENG", value: "english" },
    { id: 2, label: "RU", value: "russian" },
    { id: 3, label: "SP", value: "spanish" },
    { id: 4, label: "IL", value: "italian" },
    { id: 5, label: "GE", value: "deutch" },
  ],

  languageSelected: { id: 1, label: "ENG", value: "english" },
};

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE: {
      return {
        ...state,
        /* languageItems: state.languageItems.map((elem) => elem.id + 1), */
        languageSelected: action.languageSelected,
      };
    }

    default:
      return state;
  }
};

export const setLanguageSelected = (languageSelected) => {
  return {
    type: SET_LANGUAGE,
    languageSelected,
  };
};

export default languageReducer;
