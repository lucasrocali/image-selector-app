import { Action } from 'redux'

export interface FetchImagesAction extends Action {
  type: string;
}

export interface SetFetchImagesLoadingAction extends Action {
  type: string;
  loading: boolean;
}

export interface SetFetchImagesSuccessAction extends Action {
  type: string;
  images: string[];
}

export interface SetFetchImagesErrorAction extends Action {
  type: string;
  errorMessage: string;
}

export interface SelectImageAction extends Action {
  type: string;
  image: string;
}

export type ImagesActions = | FetchImagesAction | SetFetchImagesLoadingAction | SetFetchImagesSuccessAction | SetFetchImagesErrorAction | SelectImageAction

export interface ImagesState {
  images: string[]
  loading: boolean
  errorMessage: string
  selectedImage: string
  previousSelectedImage: string
}