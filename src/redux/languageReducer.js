const SET_LANGUAGE = "SET_LANGUAGE";

const initialState = {
  languageItems: [
    { id: 1, label: "ENG", value: "english", counter: 1 },
    { id: 2, label: "RU", value: "russian", counter: 2 },
    { id: 3, label: "SP", value: "spanish", counter: 3 },
    { id: 4, label: "IL", value: "italian", counter: 4 },
    { id: 5, label: "GE", value: "deutch", counter: 5 },
  ],

  languageSelected: { label: "ENG", value: "english" },
};

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE: {
      return {
        ...state,
        languageSelected: action.languageSelected,
        counter: action.counter + 1,
      };
    }

    default:
      return state;
  }
};

export const setLanguageSelected = (languageSelected, counter) => {
  return {
    type: SET_LANGUAGE,
    languageSelected,
    counter,
  };
};

export default languageReducer;
