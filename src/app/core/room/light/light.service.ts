import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Light } from '../../../types/light';
import { interval, map, Observable, startWith, switchMap } from 'rxjs';
import { RoomStats } from '../../../types/room';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LightService {
  data$ = this.getLightData();

  constructor(private http: HttpClient) {}

  getLightData(): Observable<Light> {
    return interval(2000).pipe(
      startWith(undefined),
      switchMap(() =>
        this.http
          .get<RoomStats>(environment.roomAPIUrl)
          .pipe(map((data) => data.light)),
      ),
    );
  }
}
