import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-card-shop',
  standalone: false,
  templateUrl: './card-shop.component.html',
  styleUrl: './card-shop.component.scss'
})
export class CardShopComponent implements OnInit {
  @Input() product : IProduct;
  constructor(){}
    ngOnInit(): void
    {}
  
}
