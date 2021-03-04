import { GetImagesAction } from './types'

//action types
export const FETCH_IMAGES = 'FETCH_IMAGES'

//actions
export function fetchImages(): GetImagesAction {
  return {
    type: FETCH_IMAGES,
  }
}
