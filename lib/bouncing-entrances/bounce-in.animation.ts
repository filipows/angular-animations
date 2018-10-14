import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation, group } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces'
import { bounceInOpacity } from './utils';

const bounceInScale = animation([
  animate(
    '{{duration}}ms',
    keyframes([
      style({transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0  }),
      style({transform: 'scale3d(1.1, 1.1, 1.1)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.2  }),
      style({transform: 'scale3d(0.9, 0.9, 0.9)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.4  }),
      style({transform: 'scale3d(1.03, 1.03, 1.03)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6  }),
      style({transform: 'scale3d(0.97, 0.97, 0.97)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.8  }),
      style({transform: 'scale3d(1, 1, 1)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1  }),
    ])
  )
]);

const DEFAULT_DURATION = 750;

export function bounceInAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'bounceIn', [
    transition(
      '0 <=> 1',
      [
        group([
          useAnimation(bounceInScale),
          useAnimation(bounceInOpacity)
        ], {
            params: {
              duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
      ]
    )
  ]);
}