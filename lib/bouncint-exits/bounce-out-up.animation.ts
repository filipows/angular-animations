import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation, group } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces'
import { bounceOutDownOpacity } from './bounce-out-down.animation';

const bounceOutUpTransition = animation([
  animate(
    '{{duration}}ms',
    keyframes([
      style({transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0  }),
      style({transform: 'translate3d(0, -10px, 0)', easing: 'ease', offset: 0.2  }),
      style({transform: 'translate3d(0, 20px, 0)', easing: 'ease', offset: 0.4  }),
      style({transform: 'translate3d(0, 20px, 0)', easing: 'ease', offset: 0.45  }),
      style({transform: 'translate3d(0, -2000px, 0)', easing: 'ease', offset: 1  }),
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function bounceOutUpAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'bounceOutUp', [
    transition(
      '0 <=> 1',
      [
        group([
          useAnimation(bounceOutUpTransition),
          useAnimation(bounceOutDownOpacity)
        ], {
            params: {
              duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
      ]
    )
  ]);
}