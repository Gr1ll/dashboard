import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {interval, Observable, switchMap} from 'rxjs';
import { map } from 'rxjs/operators';

interface ServerStatistics {
  cpuUsage: number;
  memoryUsage: number;
  diskUsage: number;
  networkUsage: number;
  uptime: number;
}

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private apiUrl = 'http://localhost:9090/serverStats/';
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
    return this.getServerStatistics().pipe(map(stats => stats.memoryUsage));
  }

  getFreeMemory(): Observable<number> {
    return this.getServerStatistics().pipe(map(stats => stats.diskUsage));
  }

  getUptime(): Observable<number> {
    return this.getServerStatistics().pipe(map(stats => stats.uptime));
  }
}
