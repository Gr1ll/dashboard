import {Component, OnDestroy, OnInit} from '@angular/core';
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
import {AsyncPipe} from "@angular/common";
import {distinctUntilChanged, Subject, takeUntil} from "rxjs";
import {Light} from "../../../types/light";

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
    AsyncPipe
  ],
  templateUrl: './light.component.html',
  styleUrl: './light.component.scss',
  providers: [provideIcons({
    lucideLightbulb,
    lucideLightbulbOff
  })],
})
export class LightComponent implements OnInit, OnDestroy {

  isLightOn: boolean | undefined;
  private subscription: any;

  constructor(protected lightService: LightService) {
  }

  ngOnInit() {
    //this.getDataFromService();
  }

  getDataFromService() {
    this.subscription = this.lightService.getLightData().pipe(
      distinctUntilChanged((prev, curr) => prev.output === curr.output)
    ).subscribe((data: Light) => {
      this.isLightOn = data.output;
    });
  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }
}
