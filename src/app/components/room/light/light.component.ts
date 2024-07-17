import {
  afterNextRender,
  Component,
  signal,
  WritableSignal,
} from '@angular/core';
import {
  HlmCardContentDirective,
  HlmCardDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { lucideLightbulb, lucideLightbulbOff } from '@ng-icons/lucide';
import { LightService } from '../../../core/room/light/light.service';
import { HlmSpinnerComponent } from '@spartan-ng/ui-spinner-helm';
import { AsyncPipe } from '@angular/common';
import { Light } from '../../../types/light';

@Component({
  selector: 'app-room-light',
  standalone: true,
  imports: [
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmIconComponent,
    HlmCardContentDirective,
    HlmSpinnerComponent,
    AsyncPipe,
  ],
  templateUrl: './light.component.html',
  styleUrl: './light.component.scss',
  providers: [
    provideIcons({
      lucideLightbulb,
      lucideLightbulbOff,
    }),
  ],
})
export class LightComponent {
  isLightOn: WritableSignal<boolean | undefined> = signal(undefined);

  constructor(protected lightService: LightService) {
    afterNextRender(() => {
      this.getDataFromService();
    });
  }

  getDataFromService() {
    this.lightService.data$.subscribe((data: Light) => {
      this.isLightOn.set(data.output);
    });
  }
}
