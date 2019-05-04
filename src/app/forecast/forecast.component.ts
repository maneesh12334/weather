import { Component, OnInit } from '@angular/core';
import { BussinessService } from '../bussiness.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  private UserList:Array<object> =[];
  constructor(private apiService:BussinessService) { }

  ngOnInit() {
    this.apiService.getList().subscribe((data:any) =>{
      this.UserList = data;
  })
  }
}
