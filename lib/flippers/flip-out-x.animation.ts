import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces'

const flipOutX = animation([
  animate(
    '{{duration}}ms',
    keyframes([
      style({transform: 'perspective(400px)', opacity: 1, easing: 'ease', offset: 0  }),
      style({transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: 1, easing: 'ease', offset: 0.3  }),
      style({transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: 0, easing: 'ease', offset: 1  }),
    ])
  )
]);

const DEFAULT_DURATION = 750;

export function flipOutXAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'flipOutX', [
    transition(
      '0 <=> 1',
      [
        style({  'backface-visibility': 'visible' }),
        useAnimation(flipOutX, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      })]
    )
  ]);
}
