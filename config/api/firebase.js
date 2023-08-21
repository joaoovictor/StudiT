import axios from 'axios'

export const apiFirebase = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1"
})