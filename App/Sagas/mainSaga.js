import {all, takeLatest} from 'redux-saga/effects';
import {fetchInfoSaga} from './startupSaga';
import UserSaga from './UserSaga/sagas';

export function* mainSaga() {
  yield all([
    takeLatest('StartUp/FetchInfo', fetchInfoSaga),
    UserSaga,
  ]);
}
