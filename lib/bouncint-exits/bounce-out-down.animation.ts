import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation, group } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces'

export const bounceOutDownOpacity = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({opacity: 1, easing: 'ease', offset: 0  }),
      style({opacity: 1, easing: 'ease', offset: 0.45  }),
      style({opacity: 0, easing: 'ease', offset: 1  }),
    ])
  )
]);


const bounceOutDownTransition = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0  }),
      style({transform: 'translate3d(0, 10px, 0)', easing: 'ease', offset: 0.2  }),
      style({transform: 'translate3d(0, -20px, 0)', easing: 'ease', offset: 0.4  }),
      style({transform: 'translate3d(0, -20px, 0)', easing: 'ease', offset: 0.45  }),
      style({transform: 'translate3d(0, 2000px, 0)', easing: 'ease', offset: 1  }),
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function bounceOutDownAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'bounceOutDown', [
    transition(
      '0 <=> 1',
      [
        group([
          useAnimation(bounceOutDownTransition),
          useAnimation(bounceOutDownOpacity)
        ], {
            params: {
              duration: (options && options.duration) || DEFAULT_DURATION,
              delay: (options && options.delay) || 0
            }
        })
      ]
    )
  ]);
}