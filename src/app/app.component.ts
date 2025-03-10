import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../Environments/environment';
import { IPagination } from './shared/models/ipagination';
import { IProduct } from './shared/models/product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit
{
  private backendUrl = environment.backendUrl;
  constructor ()
  {}
ngOnInit():void
{
}

  title = 'StoreClient';
}
