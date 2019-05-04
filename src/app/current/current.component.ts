import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  
  p: number = 1;
  private UserList:Array<object>=[];
  constructor(private apiService: WeatherService) { }
 //UserList = [];
  ngOnInit() {
    this.apiService.getUser().subscribe((data:any) =>{
     this.UserList = data;
    })
    
    
  }

}
