import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://abihome-test.herokuapp.com/test',
})

interface Response {
  status: number
  data: any
}

export function fetchImagesRequest(): Promise<Response> {
  return instance.get('/images')
}