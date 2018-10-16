import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation, group } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces'

const rotateInUpRight = animation([
  animate(
    '{{duration}}ms',
    keyframes([
      style({opacity: 0, transform: 'rotate3d(0, 0, 1, -90deg)', easing: 'ease', offset: 0 }),
      style({opacity: 1, transform: 'rotate(0deg)', easing: 'ease', offset: 1 }),
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function rotateInUpRightAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'rotateInUpRight', [
    transition(
      '0 <=> 1',
      [
        style({  'transform-origin': 'right bottom' }),
        useAnimation(rotateInUpRight, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      })]
    )
  ]);
}