import reducer from './reducer'
import { selectImage } from './actions'

describe('images reducer', () => {
  it('when selectedImage is empty and select img1 should set img1 on selectedImage', () => {
    const initialState = {
      images: ['img1', 'img2', 'img3', 'img3'],
      loading: false,
      errorMessage: '',
      selectedImage: '',
      previousSelectedImage: ''
    }

    const finalState = {
      images: ['img1', 'img2', 'img3', 'img3'],
      loading: false,
      errorMessage: '',
      selectedImage: 'img1',
      previousSelectedImage: ''
    }
    expect(reducer(initialState, selectImage('img1'))).toEqual(finalState)
  })

  it('when img1 is selectedImage and select img2 should set img2 on selectedImage and img1 on previousSelectedImage', () => {
    const initialState = {
      images: ['img1', 'img2', 'img3', 'img3'],
      loading: false,
      errorMessage: '',
      selectedImage: 'img1',
      previousSelectedImage: ''
    }

    const finalState = {
      images: ['img1', 'img2', 'img3', 'img3'],
      loading: false,
      errorMessage: '',
      selectedImage: 'img2',
      previousSelectedImage: 'img1'
    }
    expect(reducer(initialState, selectImage('img2'))).toEqual(finalState)
  })
  
  it('when img2 is selectedImage and img1 is previousSelectedImage, and select img3 should set img3 on selectedImage and img2 previousSelectedImage', () => {
    const initialState = {
      images: ['img1', 'img2', 'img3', 'img3'],
      loading: false,
      errorMessage: '',
      selectedImage: 'img2',
      previousSelectedImage: 'img1'
    }

    const finalState = {
      images: ['img1', 'img2', 'img3', 'img3'],
      loading: false,
      errorMessage: '',
      selectedImage: 'img3',
      previousSelectedImage: 'img2'
    }
    expect(reducer(initialState, selectImage('img3'))).toEqual(finalState)
  })
})