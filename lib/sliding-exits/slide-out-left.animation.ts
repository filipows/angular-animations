import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation, group } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces'

const slideOutLeft = animation([
  animate(
    '{{duration}}ms',
    keyframes([
      style({transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
      style({transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden', easing: 'ease', offset: 1 }),
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function slideOutLeftAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'slideOutLeft', [
    transition(
      '0 <=> 1',
      [
        useAnimation(slideOutLeft, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      })]
    )
  ]);
}