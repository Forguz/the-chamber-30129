import * as actions from './constants';

const initialState = {
  user: null,
  updateProcessing: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case actions.USER_PROFILE_ERROR:
      return {...state, error: action.error};
    case actions.START_FETCHING:
      return {...state, updateProcessing: true};
    case actions.UPDATE_ANY_ERROR:
      return {...state, error: action.error, updateProcessing: false};
    default:
      return {...state};
  }
};
