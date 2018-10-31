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
        visibility: 'hidden',
        overflow: 'hidden'
      })
    ),
    state(
      '0',
      style({
        height: AUTO_STYLE,
        visibility: AUTO_STYLE,
        overflow: 'hidden'
      })
    ),
    transition(
      '0 => 1',
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          group([query('@*', animateChild(), { optional: true }), animate('{{duration}}' + 'ms ' + '{{delay}}' + 'ms ' + 'ease-in')]),
          ...(!options || !options.animateChildren || options.animateChildren === 'together'
            ? [query('@*', animateChild(), { optional: true })]
            : [])
        ]),
        ...(options && options.animateChildren === 'after' ? [query('@*', animateChild(), { optional: true })] : [])
      ],
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      }
    ),
    transition(
      '1 => 0',
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          group([query('@*', animateChild(), { optional: true }), animate('{{duration}}' + 'ms ' + '{{delay}}' + 'ms ' + 'ease-out')]),
          ...(!options || !options.animateChildren || options.animateChildren === 'together'
            ? [query('@*', animateChild(), { optional: true })]
            : [])
        ]),
        ...(options && options.animateChildren === 'after' ? [query('@*', animateChild(), { optional: true })] : [])
      ],
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      }
    )
  ]);
}
