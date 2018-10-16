import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation, group } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces'

const rotateIn = animation([
  animate(
    '{{duration}}ms',
    keyframes([
      style({opacity: 0, transform: 'rotate(-200deg)', easing: 'ease', offset: 0 }),
      style({opacity: 1, transform: 'rotate(0deg)', easing: 'ease', offset: 1 }),
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function rotateInAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'rotateIn', [
    transition(
      '0 <=> 1',
      [
        style({  'transform-origin': 'center' }),
        useAnimation(rotateIn, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      })]
    )
  ]);
}