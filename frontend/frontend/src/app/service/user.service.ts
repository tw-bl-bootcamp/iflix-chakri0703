import { Injectable } from '@angular/core';
import {HttpService} from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient:HttpService,
  ) { }
  
  post(data){
    console.log("data in services==>",data);
    
   return this.httpClient.post('login',data);
  }
}
