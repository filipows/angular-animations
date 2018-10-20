import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';

const shake = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0  }),
      style({transform: 'translate3d(-10px, 0, 0)', easing: 'ease', offset: 0.1  }),
      style({transform: 'translate3d(10px, 0, 0)', easing: 'ease', offset: 0.2  }),
      style({transform: 'translate3d(-10px, 0, 0)', easing: 'ease', offset: 0.3  }),
      style({transform: 'translate3d(10px, 0, 0)', easing: 'ease', offset: 0.4  }),
      style({transform: 'translate3d(-10px, 0, 0)', easing: 'ease', offset: 0.5  }),
      style({transform: 'translate3d(10px, 0, 0)', easing: 'ease', offset: 0.6  }),
      style({transform: 'translate3d(-10px, 0, 0)', easing: 'ease', offset: 0.7  }),
      style({transform: 'translate3d(10px, 0, 0)', easing: 'ease', offset: 0.8  }),
      style({transform: 'translate3d(-10px, 0, 0)', easing: 'ease', offset: 0.9  }),
      style({transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1  })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function shakeAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'shake', [
    transition(
      '0 <=> 1',
      [
        useAnimation(shake, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })]
    )
  ]);
}
