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

@Component({
  selector: 'app-room-shutters',
  standalone: true,
  imports: [
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmCardContentDirective,
    NgStyle
  ],
  templateUrl: './shutters.component.html',
  styleUrl: './shutters.component.scss'
})
export class ShuttersComponent {

  shutterPercentage: WritableSignal<number> = signal(0);
  isShutterDataLoaded: WritableSignal<boolean> = signal(false);

  constructor(private shutterService: ShutterService) {
    afterNextRender(() => {
      this.getDataFromService();
    })
  }

  getDataFromService() {
    this.shutterService.data$.subscribe((data: Shutter) => {
      if (!this.isShutterDataLoaded()) this.isShutterDataLoaded.set(true);
      this.shutterPercentage.set(data.current_pos)
    });
  }

}
