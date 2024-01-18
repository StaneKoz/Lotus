import axios from "axios";

const url = "https:/swapi.dev/api/people/";

export const $api = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json'
  }
})