import {
  ImagesState,
  ImagesActions
} from './types'
import {
  SET_FETCH_IMAGES_LOADING,
  SET_FETCH_IMAGES_ERROR,
  SET_FETCH_IMAGES_SUCCESS,
  SELECT_IMAGE
} from './actionTypes'

export const initialState: ImagesState = {
  images: [],
  loading: false,
  errorMessage: '',
  selectedImage: '',
  previousSelectedImage: '',
}

//reducer
export default function imagesReducer(
  state = initialState,
  action: ImagesActions
): ImagesState {
  switch (action.type) {
    case SET_FETCH_IMAGES_LOADING:
      const { loading } = action
      return {
        ...state,
        loading
      }
    case SET_FETCH_IMAGES_ERROR:
      const { errorMessage } = action
      return {
        ...state,
        errorMessage
      }
    case SET_FETCH_IMAGES_SUCCESS:
      const { images } = action
      return {
        ...state,
        images
      }
    case SELECT_IMAGE:
      const { image } = action
      return {
        ...state,
        selectedImage: image,
        previousSelectedImage: state.selectedImage
      }
    default:
      return state
  }
}