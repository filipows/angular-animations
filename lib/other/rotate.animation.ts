import { animate, animateChild, AnimationTriggerMetadata, group, query, state, style, transition, trigger } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';

interface IRotateAnimationOptions extends IAnimationOptions {
  /**
   * Degrees to rotate. Default 180
   */
  degrees?: number;
}

const DEFAULT_DURATION = 200;

export function rotateAnimation(options?: IRotateAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'rotate', [
    state(
      '0',
      style({
        transform: 'rotate(0deg)'
      })
    ),
    state(
      '1',
      style({
        transform: 'rotate(' + ((options && options.degrees) || 180) + 'deg)'
      })
    ),
    transition('0 => 1', [
      group([
        query('@*', animateChild(), { optional: true }),
        animate(((options && options.duration) || DEFAULT_DURATION) + 'ms ' + ((options && options.delay) || 0) + 'ms ' + 'ease')
      ])
    ]),
    transition('1 => 0', [
      group([
        query('@*', animateChild(), { optional: true }),
        animate(((options && options.duration) || DEFAULT_DURATION) + 'ms ' + ((options && options.delay) || 0) + 'ms ' + 'ease')
      ])
    ])
  ]);
}
