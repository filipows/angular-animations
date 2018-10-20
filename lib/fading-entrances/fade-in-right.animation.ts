import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation, group } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces'

const fadeInRight = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({opacity: 0, transform: 'translate3d(100%, 0, 0)', easing: 'ease', offset: 0  }),
      style({opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1  })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function fadeInRightAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'fadeInRight', [
    transition(
      '0 <=> 1',
      [
          useAnimation(fadeInRight, {
            params: {
              duration: (options && options.duration) || DEFAULT_DURATION,
              delay: (options && options.delay) || 0
            }
          }),
      ]
    )
  ]);
}

export function fadeInRightOnEnterAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'fadeInRightOnEnter', [
    transition(':enter',
      [
        useAnimation(fadeInRight, {
          params: {
            duration: (options && options.duration) || DEFAULT_DURATION,
            delay: (options && options.delay) || 0
          }
        })
      ]
    )
  ]);
}