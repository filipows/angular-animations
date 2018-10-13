import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';

const tada = animation([
  animate(
    '{{duration}}ms',
    keyframes([
      style({transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 0  }),
      style({transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)', easing: 'ease', offset: 0.1  }),
      style({transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)', easing: 'ease', offset: 0.2  }),
      style({transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', easing: 'ease', offset: 0.3  }),
      style({transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', easing: 'ease', offset: 0.4  }),
      style({transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', easing: 'ease', offset: 0.5  }),
      style({transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', easing: 'ease', offset: 0.6  }),
      style({transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', easing: 'ease', offset: 0.7  }),
      style({transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', easing: 'ease', offset: 0.8  }),
      style({transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', easing: 'ease', offset: 0.9  }),
      style({transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 1  }),
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function tadaAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'tada', [
    transition(
      '0 <=> 1',
      [
        useAnimation(tada, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      })]
    )
  ]);
}
