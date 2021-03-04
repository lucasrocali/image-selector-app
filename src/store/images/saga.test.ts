import { expectSaga } from 'redux-saga-test-plan'
import { fetchImages, setFetchImagesError, setFetchImagesLoading, setFetchImagesSuccess } from './actions'
import { handleFetchImages } from './saga'
import imagesReducer, { initialState } from './reducer'

describe('handleFetchImages', () => {
  it('when request is success should set images', () => {
    const imagesResponse = ['img1', 'img2']
    const fetchImagesRequest = () => Promise.resolve({ status: 200, data: imagesResponse })

    return expectSaga(handleFetchImages, fetchImages(), fetchImagesRequest)
      .withReducer(imagesReducer)
      .withState(initialState)
      .put(setFetchImagesLoading(true))
      .put(setFetchImagesLoading(false))
      .put(setFetchImagesSuccess(imagesResponse))
      .hasFinalState({
        ...initialState,
        images: imagesResponse,
      })
      .run()
  })

  it('when request failed should set errorMessage', () => {
    const fetchImagesRequest = () => Promise.reject(new Error('Network error'))

    return expectSaga(handleFetchImages, fetchImages(), fetchImagesRequest)
      .withReducer(imagesReducer)
      .withState(initialState)
      .put(setFetchImagesLoading(true))
      .put(setFetchImagesLoading(false))
      .put(setFetchImagesError('Network error'))
      .hasFinalState({
        ...initialState,
        errorMessage: 'Network error'
      })
      .run()
  })

  it('when request does not return status 200 should set \'Somethig went wrong\'', () => {
    const fetchImagesRequest = () => Promise.resolve({ status: 500, data: undefined })

    return expectSaga(handleFetchImages, fetchImages(), fetchImagesRequest)
      .withReducer(imagesReducer)
      .withState(initialState)
      .put(setFetchImagesLoading(true))
      .put(setFetchImagesLoading(false))
      .put(setFetchImagesError('Somethig went wrong'))
      .hasFinalState({
        ...initialState,
        errorMessage: 'Somethig went wrong'
      })
      .run()
  })
})