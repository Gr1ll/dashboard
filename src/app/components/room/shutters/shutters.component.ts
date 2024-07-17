import {afterNextRender, Component, signal, WritableSignal} from '@angular/core';
import {
  HlmCardContentDirective,
  HlmCardDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective
} from "@spartan-ng/ui-card-helm";
import {Light} from "../../../types/light";
import {ShutterService} from "../../../core/room/shutters/shutter.service";
import {Shutter} from "../../../types/shutters";
import {NgStyle} from "@angular/common";
import {HlmSpinnerComponent} from "@spartan-ng/ui-spinner-helm";

@Component({
  selector: 'app-room-shutters',
  standalone: true,
  imports: [
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmCardContentDirective,
    NgStyle,
    HlmSpinnerComponent
  ],
  templateUrl: './shutters.component.html',
  styleUrl: './shutters.component.scss'
})
export class ShuttersComponent {

  shutterPercentage: WritableSignal<number | undefined> = signal(undefined);

  constructor(private shutterService: ShutterService) {
    afterNextRender(() => {
      this.getDataFromService();
    })
  }

  getDataFromService() {
    this.shutterService.data$.subscribe((data: Shutter) => {
      this.shutterPercentage.set(data.current_pos)
    });
  }

}
