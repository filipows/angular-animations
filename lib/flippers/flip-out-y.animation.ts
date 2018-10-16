import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces'

const flipOutY = animation([
  animate(
    '{{duration}}ms',
    keyframes([
      style({transform: 'perspective(400px)', opacity: 1, easing: 'ease', offset: 0  }),
      style({transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)', opacity: 1, easing: 'ease', offset: 0.3  }),
      style({transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: 0, easing: 'ease', offset: 1  }),
    ])
  )
]);

const DEFAULT_DURATION = 750;

export function flipOutYAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'flipOutY', [
    transition(
      '0 <=> 1',
      [
        style({  'backface-visibility': 'visible' }),
        useAnimation(flipOutY, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      })]
    )
  ]);
}
