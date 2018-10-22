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
        transform: 'rotate(' + '{{degrees}}' + 'deg)'
      }),
      {
        params: {
          degrees: (options && options.degrees) || 180
        }
      }
    ),
    transition(
      '0 => 1',
      [group([query('@*', animateChild(), { optional: true }), animate('{{duration}}' + 'ms ' + '{{delay}}' + 'ms ' + 'ease')])],
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      }
    ),
    transition(
      '1 => 0',
      [group([query('@*', animateChild(), { optional: true }), animate('{{duration}}' + 'ms ' + '{{delay}}' + 'ms ' + 'ease')])],
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      }
    )
  ]);
}
