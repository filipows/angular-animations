import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';

const swing = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ transform: 'rotate3d(0, 0, 1, 0deg)', easing: 'ease', offset: 0 }),
      style({ transform: 'rotate3d(0, 0, 1, 15deg)', easing: 'ease', offset: 0.2 }),
      style({ transform: 'rotate3d(0, 0, 1, -10deg)', easing: 'ease', offset: 0.4 }),
      style({ transform: 'rotate3d(0, 0, 1, 5deg)', easing: 'ease', offset: 0.6 }),
      style({ transform: 'rotate3d(0, 0, 1, -5deg)', easing: 'ease', offset: 0.8 }),
      style({ transform: 'rotate3d(0, 0, 1, 0deg)', easing: 'ease', offset: 1 })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function swingAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'swing', [
    transition('0 <=> 1', [
      style({ 'transform-origin': 'top center' }),
      useAnimation(swing, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}
