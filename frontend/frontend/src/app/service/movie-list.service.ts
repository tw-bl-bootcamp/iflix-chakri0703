import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service'
@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  constructor(
    private httpService:HttpService
  ) { }

  getAllMovies(){
    return this.httpService.get('moviesList');
  }
}
