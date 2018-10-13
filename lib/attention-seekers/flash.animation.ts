import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';

const flash = animation([
  animate(
    '{{duration}}ms',
    keyframes([
      style({opacity: 1, easing: 'ease', offset: 0  }),
      style({opacity: 0, easing: 'ease', offset: 0.25  }),
      style({opacity: 1, easing: 'ease', offset: 0.5 }),
      style({opacity: 0, easing: 'ease', offset: 0.75  }),
      style({opacity: 1, easing: 'ease', offset: 1  }),
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function flashAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'flash', [
    transition(
      '0 <=> 1',
      [
        useAnimation(flash, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      })]
    )
  ]);
}
