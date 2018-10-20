import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation, group } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces'

const fadeOutDownBig = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0  }),
      style({opacity: 0, transform: 'translate3d(0, 2000px, 0)', easing: 'ease', offset: 1  })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function fadeOutDownBigAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'fadeOutDownBig', [
    transition(
      '0 <=> 1',
      [
          useAnimation(fadeOutDownBig, {
            params: {
              duration: (options && options.duration) || DEFAULT_DURATION,
              delay: (options && options.delay) || 0
            }
          }),
      ]
    )
  ]);
}

export function fadeOutDownBigOnLeaveAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'fadeOutDownBigOnLeave', [
    transition(':leave',
      [
        useAnimation(fadeOutDownBig, {
          params: {
            duration: (options && options.duration) || DEFAULT_DURATION,
            delay: (options && options.delay) || 0
          }
        })
      ]
    )
  ]);
}