import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';

const rotateInDownLeft = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ opacity: 0, transform: 'rotate3d(0, 0, 1, -45deg)', easing: 'ease', offset: 0 }),
      style({ opacity: 1, transform: 'rotate3d(0, 0, 1, 0deg)', easing: 'ease', offset: 1 })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function rotateInDownLeftAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'rotateInDownLeft', [
    transition('0 <=> 1', [
      style({ 'transform-origin': 'left bottom' }),
      useAnimation(rotateInDownLeft, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}

export function rotateInDownLeftOnEnterAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'rotateInDownLeftOnEnter', [
    transition(':enter', [
      style({ 'transform-origin': 'left bottom' }),
      useAnimation(rotateInDownLeft, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}
