import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';

const pulse = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 0 }),
      style({ transform: 'scale3d(1.05, 1.05, 1.05)', easing: 'ease', offset: 0.5 }),
      style({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 1 })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function pulseAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'pulse', [
    transition('0 <=> 1', [
      useAnimation(pulse, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}
