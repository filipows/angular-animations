import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation, group } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces'

const fadeOut = animation([
  animate(
    '{{duration}}ms',
    keyframes([
      style({opacity: 1, easing: 'ease', offset: 0  }),
      style({opacity: 0, easing: 'ease', offset: 1  })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function fadeOutAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'fadeOut', [
    transition(
      '0 <=> 1',
      [
          useAnimation(fadeOut, {
            params: {
              duration: (options && options.duration) || DEFAULT_DURATION
            }
          }),
      ]
    )
  ]);
}