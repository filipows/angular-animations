import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation, group } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces'

const rotateInUpLeft = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({opacity: 0, transform: 'rotate3d(0, 0, 1, 45deg)', easing: 'ease', offset: 0 }),
      style({opacity: 1, transform: 'rotate3d(0, 0, 1, 0deg)', easing: 'ease', offset: 1 }),
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function rotateInUpLeftAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'rotateInUpLeft', [
    transition(
      '0 <=> 1',
      [
        style({  'transform-origin': 'left bottom' }),
        useAnimation(rotateInUpLeft, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })]
    )
  ]);
}

export function rotateInUpLeftOnEnterAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger(options && options.anchor || 'rotateInUpLeftOnEnter', [
    transition(':enter',
      [
        style({  'transform-origin': 'left bottom' }),
        useAnimation(rotateInUpLeft, {
          params: {
            duration: (options && options.duration) || DEFAULT_DURATION,
            delay: (options && options.delay) || 0
          }
        })
      ]
    )
  ]);
}

