import {
  animate,
  animation,
  AnimationTriggerMetadata,
  group,
  keyframes,
  style,
  transition,
  trigger,
  useAnimation
} from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';

const zoomOutUp = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({
        'transform-origin': 'center bottom',
        opacity: 1,
        transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)',
        easing: 'ease',
        offset: 0.4
      }),
      style({
        'transform-origin': 'center bottom',
        opacity: 0,
        transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)',
        easing: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
        offset: 1
      })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function zoomOutUpAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'zoomOutUp', [
    transition('0 <=> 1', [
      useAnimation(zoomOutUp, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}

export function zoomOutUpOnLeaveAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'zoomOutUpOnLeave', [
    transition(':leave', [
      useAnimation(zoomOutUp, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}