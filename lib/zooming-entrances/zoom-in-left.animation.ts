import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';

const zoomInLeft = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)', easing: 'ease', offset: 0 }),
      style({
        opacity: 1,
        transform: 'scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)',
        easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
        offset: 0.6
      }),
      style({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', easing: 'cubic-bezier(0.175, 0.885, 0.32, 1)', offset: 1 })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function zoomInLeftAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'zoomInLeft', [
    transition('0 <=> 1', [
      useAnimation(zoomInLeft, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}

export function zoomInLeftOnEnterAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'zoomInLeftOnEnter', [
    transition(':enter', [
      useAnimation(zoomInLeft, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}
