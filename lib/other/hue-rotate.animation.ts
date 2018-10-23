import {
  animate,
  animateChild,
  animation,
  AnimationTriggerMetadata,
  group,
  keyframes,
  query,
  style,
  transition,
  trigger,
  useAnimation
} from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';

const hueRotate = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([style({ filter: 'hue-rotate(0deg)', offset: 0 }), style({ filter: 'hue-rotate(-360deg)', offset: 1 })])
  )
]);

const DEFAULT_DURATION = 3000;

export function hueRotateAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'hueRotate', [
    transition(
      '0 <=> 1',
      group([
        query('@*', animateChild({ delay: (options && options.delayChildren) || 0 }), { optional: true }),
        useAnimation(hueRotate, {
          params: {
            duration: '{{duration}}',
            delay: '{{delay}}'
          }
        })
      ]),
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      }
    )
  ]);
}
