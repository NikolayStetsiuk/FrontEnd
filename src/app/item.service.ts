import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "./item/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  baseUrl : string = 'http://localhost:8080/users';

  public getItem(): Observable<Item[]>{
    return this.http.get<Item[]>(this.baseUrl);
  }


}
