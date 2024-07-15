import {afterNextRender, Component, inject, OnInit, Signal, signal, WritableSignal} from '@angular/core';
import {
  HlmCardContentDirective,
  HlmCardDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective
} from "@spartan-ng/ui-card-helm";
import {HlmIconComponent, provideIcons} from "@spartan-ng/ui-icon-helm";
import {lucideCpu, lucideMemoryStick} from "@ng-icons/lucide";
import {ServerService} from "../../../core/server/server.service";
import {catchError} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {sign} from "node:crypto";

@Component({
  selector: 'app-server-stats',
  standalone: true,
  imports: [
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmCardContentDirective,
    HlmIconComponent,
    AsyncPipe,
  ],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
  providers: [
    provideIcons({
      lucideCpu,
      lucideMemoryStick
    })
  ],
})
export class ServerStatsComponent {
  cpuUsage: WritableSignal<number> = signal(0);
  memoryUsage: WritableSignal<number> = signal(0);

  constructor(private serverService: ServerService) {
    afterNextRender(() => {
      this.getStats();
    })
  }

  getStats() {
    this.serverService.data$.subscribe(data => {
      this.cpuUsage.set(Math.round(data.cpuUsage * 100) / 100);
      this.memoryUsage.set(Math.round(data.ramUsage * 100) / 100);
    })
  }
}
