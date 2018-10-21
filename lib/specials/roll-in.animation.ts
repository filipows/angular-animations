import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';

const rollIn = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({
        visibility: 'visible',
        opacity: 0,
        transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)',
        easing: 'ease',
        offset: 0
      }),
      style({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function rollInAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'rollIn', [
    transition('0 <=> 1', [
      useAnimation(rollIn, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}

export function rollInOnEnterAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'rollInOnEnter', [
    transition(':enter', [
      style({ visibility: 'hidden' }),
      useAnimation(rollIn, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}
