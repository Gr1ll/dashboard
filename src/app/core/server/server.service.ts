import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Observable, startWith, switchMap } from 'rxjs';

interface ServerStatistics {
  cpuUsage: number;
  ramUsage: number;
}

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private apiUrl = 'https://api.cyrilk.dev/serverStats/';
  private http = inject(HttpClient);
  data$: Observable<ServerStatistics> = this.getStatisticsOnClient();

  constructor() {}

  getStatisticsOnClient(): Observable<ServerStatistics> {
    return interval(5000).pipe(
      startWith(undefined),
      switchMap(() => this.http.get<ServerStatistics>(this.apiUrl)),
    );
  }
}
