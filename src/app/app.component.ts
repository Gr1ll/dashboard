import { Component } from '@angular/core';
import { LightComponent } from './components/room/light/light.component';
import { ShuttersComponent } from './components/room/shutters/shutters.component';
import { RoomStatsComponent } from './components/room/stats/stats.component';
import { ServerStatsComponent } from './components/server/stats/stats.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LightComponent,
    ShuttersComponent,
    RoomStatsComponent,
    ServerStatsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
