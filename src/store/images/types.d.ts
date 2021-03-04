export interface GetImagesAction {
  type: string
}

export type ImagesActionTypes = GetImagesAction // |

export interface ImagesState {
  images: string[]
}