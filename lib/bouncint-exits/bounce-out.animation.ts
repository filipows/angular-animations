import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation, group } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces'

const bounceOutOpacity = animation([
  animate(
    '{{duration}}ms',
    keyframes([
      style({opacity: 1, easing: 'ease', offset: 0  }),
      style({opacity: 1, easing: 'ease', offset: 0.55  }),
      style({opacity: 0, easing: 'ease', offset: 1  }),
    ])
  )
]);


const bounceOutScale = animation([
  animate(
    '{{duration}}ms',
    keyframes([
      style({transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 0  }),
      style({transform: 'scale3d(0.9, 0.9, 0.9)', easing: 'ease', offset: 0.2  }),
      style({transform: 'scale3d(1.1, 1.1, 1.1)', easing: 'ease', offset: 0.5  }),
      style({transform: 'scale3d(1.1, 1.1, 1.1)', easing: 'ease', offset: 0.55  }),
      style({transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'ease', offset: 1  }),
    ])
  )
]);

const DEFAULT_DURATION = 750;

export function bounceOutAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'bounceOut', [
    transition(
      '0 <=> 1',
      [
        group([
          useAnimation(bounceOutScale),
          useAnimation(bounceOutOpacity)
        ], {
            params: {
              duration: (options && options.duration) || DEFAULT_DURATION
            }
        })
      ]
    )
  ]);
}