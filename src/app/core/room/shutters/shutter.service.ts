import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {interval, map, Observable, startWith, switchMap} from 'rxjs';
import {Light} from '../../../types/light';
import {RoomStats} from '../../../types/room';
import {Shutter} from '../../../types/shutters';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class ShutterService {
  data$ = this.getShutterData();

  constructor(private http: HttpClient) {
  }

  getShutterData(): Observable<Shutter> {
    return interval(2000).pipe(
      startWith(undefined),
      switchMap(() =>
        this.http
          .get<RoomStats>(environment.roomAPIUrl)
          .pipe(map((data) => data.shutters)),
      ),
    );
  }
}
