import {Component, OnInit} from '@angular/core';
import {Item} from "./item/item";
import {ItemService} from "./item.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  public items : Item[] | undefined;

  constructor(private itemService : ItemService) {
  }

  public getItem(): void{
    this.itemService.getItem().subscribe(
      (response: Item[])=>{
        this.items = response;
      },(error: HttpErrorResponse) =>{
        alert(error.message)
      }
    )
  }
  ngOnInit(): void {

    this.getItem();

  }

}
