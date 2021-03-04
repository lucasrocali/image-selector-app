import { RootState } from 'src/store/reducers'

export const getImages = (state: RootState) => state.imagesReducer.images

export const isLoading = (state: RootState) => state.imagesReducer.loading

export const getErrorMessage = (state: RootState) => state.imagesReducer.errorMessage

export const getSelectedImage = (state: RootState) => state.imagesReducer.selectedImage

export const getPreviousSelectedImage = (state: RootState) => state.imagesReducer.previousSelectedImage
