import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Light} from "../../../types/light";
import {first, Observable, take} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LightService {

  lightStatus?: boolean;

  constructor(private http: HttpClient) {
    this.getLightData().pipe(
      first(),
      map(data => {
        this.lightStatus = data.output;
      })
    ).subscribe();
  }

  getLightData(): Observable<Light> {
    return this.http.get<Light>('http://192.168.0.46/rpc/Switch.GetStatus?id=0');
  }
}
