import {
  FetchImagesAction,
  SetFetchImagesLoadingAction,
  SetFetchImagesSuccessAction,
  SetFetchImagesErrorAction,
  SelectImageAction
} from './types'
import {
  FETCH_IMAGES,
  SET_FETCH_IMAGES_LOADING,
  SET_FETCH_IMAGES_SUCCESS,
  SET_FETCH_IMAGES_ERROR,
  SELECT_IMAGE
} from './actionTypes'

//actions
export function fetchImages(): FetchImagesAction {
  return {
    type: FETCH_IMAGES,
  }
}

export function setFetchImagesLoading(loading: boolean): SetFetchImagesLoadingAction {
  return {
    type: SET_FETCH_IMAGES_LOADING,
    loading
  }
}

export function setFetchImagesSuccess(images: string[]): SetFetchImagesSuccessAction {
  return {
    type: SET_FETCH_IMAGES_SUCCESS,
    images
  }
}

export function setFetchImagesError(errorMessage: string): SetFetchImagesErrorAction {
  return {
    type: SET_FETCH_IMAGES_ERROR,
    errorMessage
  }
}

export function selectImage(image: string): SelectImageAction {
  return {
    type: SELECT_IMAGE,
    image
  }
}