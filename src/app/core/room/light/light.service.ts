import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Light} from "../../../types/light";
import {
  Observable,
  interval,
  switchMap,
  catchError,
  Subject,
  takeUntil
} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LightService implements OnDestroy{
  private destroy$ = new Subject<void>();

  constructor(private http: HttpClient) {}

  getLightData(): Observable<Light> {
    return interval(5000).pipe(
      switchMap(() => this.http.get<Light>('http://192.168.0.46/rpc/Switch.GetStatus?id=0')),
      catchError(error => {
        console.error('Error fetching light status:', error);
        throw error; // Rethrow the error to propagate it downstream
      }),
      takeUntil(this.destroy$) // Unsubscribe when destroy$ emits
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
