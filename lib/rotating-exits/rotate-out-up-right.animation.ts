import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation, group } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces'

const rotateOutUpRight = animation([
  animate(
    '{{duration}}ms',
    keyframes([
      style({opacity: 1, easing: 'ease', offset: 0 }),
      style({opacity: 0, transform: 'rotate3d(0, 0, 1, 90deg)', easing: 'ease', offset: 1 }),
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function rotateOutUpRightAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'rotateOutUpRight', [
    transition(
      '0 <=> 1',
      [
        style({  'transform-origin': 'right bottom' }),
        useAnimation(rotateOutUpRight, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      })]
    )
  ]);
}