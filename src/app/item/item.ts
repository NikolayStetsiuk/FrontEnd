import {User} from "./user";

export interface Item {
  users: User[]
  totalCount: number
  error: any
}
