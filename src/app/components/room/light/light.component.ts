import {Component} from '@angular/core';
import {
  HlmCardContentDirective,
  HlmCardDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective
} from "@spartan-ng/ui-card-helm";
import {HlmIconComponent, provideIcons} from "@spartan-ng/ui-icon-helm";
import {lucideLightbulb, lucideLightbulbOff} from "@ng-icons/lucide";
import {LightService} from "../../../core/room/light/light.service";
import {HlmSpinnerComponent} from "@spartan-ng/ui-spinner-helm";

@Component({
  selector: 'app-room-light',
  standalone: true,
  imports: [
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmIconComponent,
    HlmCardContentDirective,
    HlmSpinnerComponent
  ],
  templateUrl: './light.component.html',
  styleUrl: './light.component.scss',
  providers: [provideIcons({
    lucideLightbulb,
    lucideLightbulbOff
  })],
})
export class LightComponent {

  isLightOn: boolean | undefined;

  constructor(private lightService: LightService) {
    this.isLightOn = this.lightService?.lightStatus;
  }
}
