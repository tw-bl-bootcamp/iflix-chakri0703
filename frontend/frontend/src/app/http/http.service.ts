import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(
    private httpClient:HttpClient,

  ) { }
  post(url,data){
    console.log("data in http==>",data);
    
    let response=this.httpClient.post('http://localhost:3000/'+url,data);
    return response;
  }
  get(url){
    return this.httpClient.get('http://localhost:3000/moviesList');
  }
}


