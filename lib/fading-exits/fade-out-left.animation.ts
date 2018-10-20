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

const fadeOutLeft = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
      style({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', easing: 'ease', offset: 1 })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function fadeOutLeftAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeOutLeft', [
    transition('0 <=> 1', [
      useAnimation(fadeOutLeft, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}

export function fadeOutLeftOnLeaveAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeOutLeftOnLeave', [
    transition(':leave', [
      useAnimation(fadeOutLeft, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}
