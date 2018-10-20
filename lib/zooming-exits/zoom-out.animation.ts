import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation, group } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces'

const zoomOut = animation(group([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({opacity: 1, transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 0 }),
      style({opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'ease', offset: 0.5 }),
      style({opacity: 0, easing: 'ease', offset: 1 }),
    ])
  ),
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 0 }),
      style({transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'ease', offset: 0.5 }),
    ])
  )
]));

const DEFAULT_DURATION = 1000;

export function zoomOutAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'zoomOut', [
    transition(
      '0 <=> 1',
      [
        useAnimation(zoomOut, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })]
    )
  ]);
}
