import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';
import { useAnimationIncludingChildren } from '../common/use-animation-including-children';

const zoomOutUp = () =>
  animation([
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
    transition('0 => 1', [...useAnimationIncludingChildren(zoomOutUp(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}

export function zoomOutUpOnLeaveAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'zoomOutUpOnLeave', [
    transition(':leave', [...useAnimationIncludingChildren(zoomOutUp(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}
