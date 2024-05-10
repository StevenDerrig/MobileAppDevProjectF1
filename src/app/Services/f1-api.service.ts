import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class F1APIService {

  constructor(public httpClient:HttpClient) { }

  getDriverStandings():Observable<any> {
    return this.httpClient.get('https://ergast.com/api/f1/current/driverStandings.json');
  }

  getConstructorStandings():Observable<any> {
    return this.httpClient.get('https://ergast.com/api/f1/current/constructorStandings.json');
  }

  getTrackInfo():Observable<any> {
    return this.httpClient.get('https://ergast.com/api/f1/current.json');
  }
}
