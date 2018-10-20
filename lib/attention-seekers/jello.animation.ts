import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';

const jello = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0  }),
      style({transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0.111  }),
      style({transform: 'skewX(-12.5deg) skewY(-12.5deg)', easing: 'ease', offset: 0.222  }),
      style({transform: 'skewX(6.25deg) skewY(6.25deg)', easing: 'ease', offset: 0.333  }),
      style({transform: 'skewX(-3.125deg) skewY(-3.125deg)', easing: 'ease', offset: 0.444  }),
      style({transform: 'skewX(1.5625deg) skewY(1.5625deg)', easing: 'ease', offset: 0.555  }),
      style({transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', easing: 'ease', offset: 0.666 }),
      style({transform: 'skewX(0.390625deg) skewY(0.390625deg)', easing: 'ease', offset: 0.777  }),
      style({transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', easing: 'ease', offset: 0.888  }),
      style({transform: 'skewX(0deg) skewY(0deg)', easing: 'ease', offset: 1  }),
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function jelloAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'jello', [
    transition(
      '0 <=> 1',
      [
        style({  'transform-origin': 'center' }),
        useAnimation(jello, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })]
    )
  ]);
}
