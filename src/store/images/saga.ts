import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_IMAGES } from './actionTypes'
import { setFetchImagesError, setFetchImagesLoading, setFetchImagesSuccess } from './actions'
import { FetchImagesAction } from './types'
import { fetchImagesRequest } from 'src/api'

export function* handleFetchImages(action: FetchImagesAction, fetchRequest = fetchImagesRequest) {
  try {

    yield put(setFetchImagesLoading(true))

    const { status, data: images } = yield call(fetchRequest)

    yield put(setFetchImagesLoading(false))

    if (status == 200) {
      yield put(setFetchImagesSuccess(images))
    } else {
      yield put(setFetchImagesError('Somethig went wrong'))

    }
  } catch (e) {
    yield put(setFetchImagesLoading(false))
    yield put(setFetchImagesError(e.message))
  }
}

export default function* () {
  yield takeEvery(FETCH_IMAGES, handleFetchImages)
}
