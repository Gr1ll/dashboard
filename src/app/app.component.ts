import { lucideCheck, lucideChevronDown, lucideLightbulb, lucideLightbulbOff } from '@ng-icons/lucide';
import { RouterOutlet } from '@angular/router';
import { Component, signal } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { BrnCommandImports } from '@spartan-ng/ui-command-brain';
import { HlmCommandImports } from '@spartan-ng/ui-command-helm';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmPopoverContentDirective } from '@spartan-ng/ui-popover-helm';
import {
  BrnPopoverComponent,
  BrnPopoverContentDirective,
  BrnPopoverTriggerDirective,
} from '@spartan-ng/ui-popover-brain';
import {HlmLabelDirective} from "@spartan-ng/ui-label-helm";

type Framework = { label: string; value: string };

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BrnCommandImports,
    HlmCommandImports,
    HlmIconComponent,
    BrnPopoverComponent,
    BrnPopoverTriggerDirective,
    BrnPopoverContentDirective,
    HlmPopoverContentDirective,
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmCardDescriptionDirective,
    HlmCardContentDirective,
    HlmLabelDirective,
    HlmInputDirective,
    HlmCardFooterDirective,
    HlmButtonDirective,
    HlmIconComponent
  ],
  providers: [provideIcons({ lucideCheck, lucideChevronDown, lucideLightbulb, lucideLightbulbOff })],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard';
  public frameworks = [
    {
      label: 'AnalogJs',
      value: 'analogjs'
    },
    {
      label: 'Angular',
      value: 'angular'
    },
    {
      label: 'Vue',
      value: 'vue'
    },
    {
      label: 'Nuxt',
      value: 'nuxt'
    },
    {
      label: 'React',
      value: 'react'
    },
    {
      label: 'NextJs',
      value: 'nextjs'
    }
  ];

  public currentFramework = signal<Framework | undefined>(undefined);
  public state = signal<'closed' | 'open'>('closed');

  stateChanged(state: 'open' | 'closed') {
    this.state.set(state);
  }

  commandSelected(framework: Framework) {
    this.state.set('closed');
    if (this.currentFramework()?.value === framework.value) {
      this.currentFramework.set(undefined);
    } else {
      this.currentFramework.set(framework);
    }
  }
}
