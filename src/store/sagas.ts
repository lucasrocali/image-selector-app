import { all } from 'redux-saga/effects';
import imagesSaga from './images/saga';

export const root = function* () {
  yield all([imagesSaga()]);
};
