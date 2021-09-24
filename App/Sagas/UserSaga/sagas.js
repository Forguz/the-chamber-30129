import { all, takeLatest } from "redux-saga/effects";

import * as actions from "./constants";

/**
 * Fetch Profile
 */
function* handleGetProfile() {
}

/**
 * Log out
 */
function* logout() {

}

export default all([
  takeLatest(actions.USER_PROFILE_REQUEST, handleGetProfile),
  takeLatest(actions.USER_LOG_OUT, logout),
]);
