import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../Environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit
{
  private backendUrl = environment.backendUrl;
  constructor (private http: HttpClient)
  {}
ngOnInit():void
{
this.http.get<any>(this.backendUrl + '/products').subscribe((res)=>{
  console.log(res);
});
}
  title = 'StoreClient';
}
