import {Component, OnInit} from '@angular/core';
import {
  HlmCardContentDirective,
  HlmCardDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective
} from "@spartan-ng/ui-card-helm";
import {provideIcons} from "@spartan-ng/ui-icon-helm";
import {lucideCpu, lucideMemoryStick} from "@ng-icons/lucide";
import * as os from "os"

@Component({
  selector: 'app-server-stats',
  standalone: true,
  imports: [
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmCardContentDirective
  ],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
  providers: [provideIcons({
    lucideCpu,
    lucideMemoryStick
  })],
})
export class ServerStatsComponent implements OnInit {
  cpu = os.cpus();
  totalMemory = os.totalmem();
  freeMemory = os.freemem();
  hostname = os.hostname();
  uptime = os.uptime();

  constructor() {
  }

  ngOnInit() {
    console.log(this.cpu);
    console.log(this.totalMemory);
    console.log(this.freeMemory);
    console.log(this.hostname);
    console.log(this.uptime);
  }
}
