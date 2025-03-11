import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { subscribe } from 'diagnostics_channel';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit , OnDestroy {
  private sub$ = new Subscription();
  constructor (private shopService : ShopService)
  {}
  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
  ngOnInit():void{
    this.getproducts();
  }
    private getproducts() {
      const sub$ = this.shopService.getProducts().subscribe((res) => {
        console.log(res);
      });
      this.sub$.add(sub$);
    }
  }

