import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';

const rotateInDownRight = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ opacity: 0, transform: 'rotate3d(0, 0, 1, 45deg)', easing: 'ease', offset: 0 }),
      style({ opacity: 1, transform: 'rotate3d(0, 0, 1, 0deg)', easing: 'ease', offset: 1 })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function rotateInDownRightAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'rotateInDownRight', [
    transition('0 <=> 1', [
      style({ 'transform-origin': 'right bottom' }),
      useAnimation(rotateInDownRight, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}

export function rotateInDownRightOnEnterAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'rotateInDownRightOnEnter', [
    transition(':enter', [
      style({ 'transform-origin': 'right bottom' }),
      useAnimation(rotateInDownRight, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}
