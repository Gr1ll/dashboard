import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {interval, Observable, startWith, switchMap} from 'rxjs';
import {environment} from "../../../environments/environment";

interface ServerStatistics {
  cpuUsage: number;
  ramUsage: number;
}

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private apiUrl = environment.serverAPIUrl;
  private http = inject(HttpClient);
  data$: Observable<ServerStatistics> = this.getStatisticsOnClient();

  constructor() {
  }

  getStatisticsOnClient(): Observable<ServerStatistics> {
    return interval(5000).pipe(
      startWith(undefined),
      switchMap(() => this.http.get<ServerStatistics>(this.apiUrl)),
    );
  }
}
