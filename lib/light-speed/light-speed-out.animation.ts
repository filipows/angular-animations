import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation, group } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces'

const lightSpeedOut = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({opacity: 1, easing: 'ease-in', offset: 0  }),
      style({opacity: 0, transform: 'translate3d(100%, 0, 0) skewX(30deg)', easing: 'ease-in', offset: 1  }),
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function lightSpeedOutAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'lightSpeedOut', [
    transition(
      '0 <=> 1',
      [
          useAnimation(lightSpeedOut, {
            params: {
              duration: (options && options.duration) || DEFAULT_DURATION,
              delay: (options && options.delay) || 0
            }
          }),
      ]
    )
  ]);
}