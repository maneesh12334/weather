import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BussinessService {


  apiUrl = 'https://us-central1-lifeai-8548e.cloudfunctions.net/httpsGetUsers'
  constructor(private httpClient:HttpClient) { }
  getList(){
    return this.httpClient.get(`${this.apiUrl}`); 
  }
}
