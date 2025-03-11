import { Injectable } from '@angular/core';
import { environment } from '../../Environments/environment';
import { HttpClient } from '@angular/common/http';
import { IPagination } from '../shared/models/ipagination';
import { IProduct } from '../shared/models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
private backendUrl = environment.backendUrl;
  constructor(private http:HttpClient) { }
getProducts():Observable <IPagination<IProduct>>
{
  
return this.http.get<IPagination<IProduct>>(this.backendUrl + '/products');
}
getBrands()
{}
getTypes()
{}
}
