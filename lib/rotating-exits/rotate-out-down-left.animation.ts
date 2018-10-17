import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation, group } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces'

const rotateOutDownLeft = animation([
  animate(
    '{{duration}}ms',
    keyframes([
      style({opacity: 1, easing: 'ease', offset: 0 }),
      style({opacity: 0, transform: 'rotate3d(0, 0, 1, 45deg)', easing: 'ease', offset: 1 }),
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function rotateOutDownLeftAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'rotateOutDownLeft', [
    transition(
      '0 <=> 1',
      [
        style({  'transform-origin': 'left bottom' }),
        useAnimation(rotateOutDownLeft, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      })]
    )
  ]);
}