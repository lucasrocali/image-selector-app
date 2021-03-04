import { ImagesState, ImagesActionTypes } from './types'
import { FETCH_IMAGES } from './actions'

const initialState: ImagesState = {
  images: ['foo', 'bar'],
};

//reducer
export default function imagesReducer(
  state = initialState,
  action: ImagesActionTypes
): ImagesState {
  switch (action.type) {
    case FETCH_IMAGES:
      return {
        ...state
      }
    default:
      return state
  }
}