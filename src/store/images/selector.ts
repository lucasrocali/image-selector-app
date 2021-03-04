import { RootState } from 'src/store/reducers'

export const getImages = (state: RootState) => state.imagesReducer.images
