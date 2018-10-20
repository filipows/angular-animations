import {
  animate,
  animateChild,
  AnimationTriggerMetadata,
  AUTO_STYLE,
  group,
  query,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';

const DEFAULT_DURATION = 200;

export function collapseAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'collapse', [
    state(
      '1',
      style({
        height: '0',
        display: 'none',
        overflow: 'hidden'
      })
    ),
    state(
      '0',
      style({
        height: AUTO_STYLE,
        display: AUTO_STYLE,
        overflow: 'hidden'
      })
    ),
    transition('0 => 1', [
      group([
        query('@*', animateChild(), { optional: true }),
        animate(((options && options.duration) || DEFAULT_DURATION) + 'ms ' + ((options && options.delay) || 0) + 'ms ' + 'ease-in')
      ])
    ]),
    transition('1 => 0', [
      group([
        query('@*', animateChild(), { optional: true }),
        animate(((options && options.duration) || DEFAULT_DURATION) + 'ms ' + ((options && options.delay) || 0) + 'ms ' + 'ease-out')
      ])
    ])
  ]);
}
