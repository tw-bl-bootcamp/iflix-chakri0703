import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class TheaterService {

  constructor(
    private http:HttpService
  ) { }

  getAllTheaters(){
   return  this.http.get('theaterList');
  }
}
