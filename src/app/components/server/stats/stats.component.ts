import {Component, OnInit} from '@angular/core';
import {
  HlmCardContentDirective,
  HlmCardDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective
} from "@spartan-ng/ui-card-helm";
import {provideIcons} from "@spartan-ng/ui-icon-helm";
import {lucideCpu, lucideMemoryStick} from "@ng-icons/lucide";
import {ServerService} from "../../../core/server/server.service";
import {provideHttpClient} from "@angular/common/http";

@Component({
  selector: 'app-server-stats',
  standalone: true,
  imports: [
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmCardContentDirective,
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
export class ServerStatsComponent implements OnInit {
  cpuUsage?: number;
  memoryUsage?: number;
  diskUsage?: number;
  uptime?: number;

  constructor(protected serverService: ServerService) {
  }

  ngOnInit(): void {
    this.serverService.getCpu().subscribe(data => this.cpuUsage = data);
    this.serverService.getTotalMemory().subscribe(data => this.memoryUsage = data);
    this.serverService.getFreeMemory().subscribe(data => this.diskUsage = data);
    this.serverService.getUptime().subscribe(data => this.uptime = data);
  }
}
