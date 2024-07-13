import {Component} from '@angular/core';
import {
  HlmCardContentDirective,
  HlmCardDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective
} from "@spartan-ng/ui-card-helm";
import {HlmIconComponent, provideIcons} from "@spartan-ng/ui-icon-helm";
import {lucideLightbulb, lucideLightbulbOff} from "@ng-icons/lucide";

@Component({
  selector: 'app-room-light',
  standalone: true,
  imports: [
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmIconComponent,
    HlmCardContentDirective
  ],
  templateUrl: './light.component.html',
  styleUrl: './light.component.scss',
  providers: [provideIcons({
    lucideLightbulb,
    lucideLightbulbOff
  })],
})
export class LightComponent {

}
