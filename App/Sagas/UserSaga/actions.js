import * as actions from './constants';

export const getProfile = () => ({
  type: actions.USER_PROFILE_REQUEST,
});

export const logout = () => ({
  type: actions.USER_LOG_OUT,
});
