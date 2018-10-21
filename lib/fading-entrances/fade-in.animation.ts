import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';

const fadeIn = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([style({ visibility: 'visible', opacity: 0, easing: 'ease', offset: 0 }), style({ opacity: 1, easing: 'ease', offset: 1 })])
  )
]);

const DEFAULT_DURATION = 1000;

export function fadeInAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeIn', [
    transition('0 <=> 1', [
      useAnimation(fadeIn, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}

export function fadeInOnEnterAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeInOnEnter', [
    transition(':enter', [
      style({ visibility: 'hidden' }),
      useAnimation(fadeIn, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}