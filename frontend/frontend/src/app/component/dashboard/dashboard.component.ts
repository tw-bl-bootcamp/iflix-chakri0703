import { Component, OnInit } from '@angular/core';
import { MovieListService} from '../../service/movie-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private movieService:MovieListService,
 
  ) { }

  ngOnInit() {
    this.movieList();
  }

  movieList(){
    this.movieService.getAllMovies().subscribe(
      (response:any)=>{
        console.log("response==>",response.data);
        localStorage.setItem('movies',JSON.stringify(response.data));
      },
      error=>{
        console.log("error in movie list==>",error);
        
      }
    )
  }
  movies:any=JSON.parse(localStorage.getItem('movies'));
}
