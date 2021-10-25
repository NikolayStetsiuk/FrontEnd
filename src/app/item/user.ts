import {Photos} from "./photos";

export interface User {
  name: string
  id: number
  photos: Photos
  status: any
  followed: boolean
}
