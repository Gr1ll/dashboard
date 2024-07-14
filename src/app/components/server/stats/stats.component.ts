import {Component, OnInit} from '@angular/core';
import {
  HlmCardContentDirective,
  HlmCardDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective
} from "@spartan-ng/ui-card-helm";
import {HlmIconComponent, provideIcons} from "@spartan-ng/ui-icon-helm";
import {lucideCpu, lucideMemoryStick} from "@ng-icons/lucide";
import {ServerService} from "../../../core/server/server.service";

@Component({
  selector: 'app-server-stats',
  standalone: true,
  imports: [
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmCardContentDirective,
    HlmIconComponent,
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

  constructor(protected serverService: ServerService) {
  }

  ngOnInit(): void {
    this.serverService.getCpu().subscribe(data => this.cpuUsage = Math.round(data * 100) / 100);
    this.serverService.getTotalMemory().subscribe(data => this.memoryUsage = Math.round(data * 100) / 100);
  }
}
