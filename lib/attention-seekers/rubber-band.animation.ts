import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';

const rubberBand = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 0  }),
      style({transform: 'scale3d(1.25, 0.75, 1)', easing: 'ease', offset: 0.3  }),
      style({transform: 'scale3d(0.75, 1.25, 1)', easing: 'ease', offset: 0.4  }),
      style({transform: 'scale3d(1.15, 0.85, 1)', easing: 'ease', offset: 0.5  }),
      style({transform: 'scale3d(0.95, 1.05, 1)', easing: 'ease', offset: 0.65  }),
      style({transform: 'scale3d(1.05, 0.95, 1)', easing: 'ease', offset: 0.75  }),
      style({transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 1  }),
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function rubberBandAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'rubberBand', [
    transition(
      '0 <=> 1',
      [
        useAnimation(rubberBand, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })]
    )
  ]);
}
