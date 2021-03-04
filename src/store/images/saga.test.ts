import { expectSaga } from 'redux-saga-test-plan'
import { fetchImages, setFetchImagesError, setFetchImagesLoading, setFetchImagesSuccess } from './actions'
import { handleFetchImages } from './saga'
import imagesReducer from './reducer'

it('when request is success should set images', () => {
  const imagesResponse = ['img1', 'img2']
  const fetchImagesRequest = () => Promise.resolve({ status: 200, data: imagesResponse })

  return expectSaga(handleFetchImages, fetchImages(), fetchImagesRequest)
    .withReducer(imagesReducer)
    .put(setFetchImagesLoading(true))
    .put(setFetchImagesLoading(false))
    .put(setFetchImagesSuccess(imagesResponse))
    .hasFinalState({
      images: imagesResponse,
      loading: false,
      errorMessage: ''
    })
    .run()
})

it('when request failed should set errorMessage', () => {
  const fetchImagesRequest = () => Promise.reject(new Error('Network error'))

  return expectSaga(handleFetchImages, fetchImages(), fetchImagesRequest)
    .withReducer(imagesReducer)
    .put(setFetchImagesLoading(true))
    .put(setFetchImagesLoading(false))
    .put(setFetchImagesError('Network error'))
    .hasFinalState({
      images: [],
      loading: false,
      errorMessage: 'Network error'
    })
    .run()
})

it('when request does not return status 200 should set \'Somethig went wrong\'', () => {
  const fetchImagesRequest = () => Promise.resolve({ status: 500, data: undefined })

  return expectSaga(handleFetchImages, fetchImages(), fetchImagesRequest)
    .withReducer(imagesReducer)
    .put(setFetchImagesLoading(true))
    .put(setFetchImagesLoading(false))
    .put(setFetchImagesError('Somethig went wrong'))
    .hasFinalState({
      images: [],
      loading: false,
      errorMessage: 'Somethig went wrong'
    })
    .run()
})