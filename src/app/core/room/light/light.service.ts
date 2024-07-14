import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Light} from "../../../types/light";
import {
  Observable,
} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LightService {
  constructor(private http: HttpClient) {
  }

  getLightData(): Observable<Light> {
    return this.http.get<Light>('http://192.168.0.46/rpc/Switch.GetStatus?id=0');
  }
}
