import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

interface ServerStatistics {
  cpuUsage: number;
  ramUsage: number;
}

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private apiUrl = 'https://api.cyrilk.dev/serverStats/';
  SERVERSTATISTICS$: Observable<ServerStatistics>;

  constructor(private http: HttpClient) {
    this.SERVERSTATISTICS$ = this.getServerStatistics();
  }

  getServerStatistics(): Observable<ServerStatistics> {
    return this.http.get<ServerStatistics>(this.apiUrl);
  }

  getCpu(): Observable<number> {
    return this.SERVERSTATISTICS$.pipe(map(stats => stats.cpuUsage));
  }

  getTotalMemory(): Observable<number> {
    return this.getServerStatistics().pipe(map(stats => stats.ramUsage));
  }
}
