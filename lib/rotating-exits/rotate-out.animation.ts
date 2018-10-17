import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation, group } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces'

const rotateOut = animation([
  animate(
    '{{duration}}ms',
    keyframes([
      style({opacity: 1, easing: 'ease', offset: 0 }),
      style({opacity: 0, transform: 'rotate(200deg)', easing: 'ease', offset: 1 }),
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function rotateOutAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'rotateOut', [
    transition(
      '0 <=> 1',
      [
        style({  'transform-origin': 'center' }),
        useAnimation(rotateOut, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      })]
    )
  ]);
}