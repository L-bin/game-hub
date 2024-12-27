import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  next: string
  results: T[]
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e53bba19d7914970889f528d70c8e06d"
  }
})

class APIClient<T>{

  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data)
  }

  get = (id: string) => {
    return axiosInstance.get<T>(this.endpoint + "/" + id).then(res => res.data)
  }
}

export default APIClient