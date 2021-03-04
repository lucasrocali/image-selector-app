import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_IMAGES } from './actionTypes'
import { setFetchImagesError, setFetchImagesLoading, setFetchImagesSuccess } from './actions'
import { FetchImagesAction } from './types'

const instance = axios.create({
  baseURL: 'https://abihome-test.herokuapp.com/test',
})

interface Response {
  status: number
  data: any
}

function fetchImagesRequest(): Promise<Response> {
  return instance.get('/images')
}

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
