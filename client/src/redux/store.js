import { createStore } from 'redux';

const initialState = {
  searchTerm: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;