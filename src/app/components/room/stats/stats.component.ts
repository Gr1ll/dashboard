import {Component} from '@angular/core';
import {
  HlmCardContentDirective,
  HlmCardDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective
} from "@spartan-ng/ui-card-helm";
import {HlmIconComponent} from "@spartan-ng/ui-icon-helm";

@Component({
  selector: 'app-room-stats',
  standalone: true,
  imports: [
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmCardContentDirective,
    HlmIconComponent
  ],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class RoomStatsComponent {

}
