import { Component, OnInit } from '@angular/core';
import { TheaterService} from '../../service/theater.service';
import { error } from 'util';
@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css']
})
export class TheaterComponent implements OnInit {

  constructor(
   private service:TheaterService
  ) { }

  ngOnInit() {
    this.getTheaters();
  }
  getTheaters(){
    this.service.getAllTheaters().subscribe(
      (response:any)=>{
        console.log("data in response==>",response.data);
        
        localStorage.setItem('theater',JSON.stringify(response.data));
      },
      error=>{
        console.log("error in theater list==>",error);
        
      }
    )
  }
  theaters:any=JSON.parse(localStorage.getItem('theater'));
  
  

}
