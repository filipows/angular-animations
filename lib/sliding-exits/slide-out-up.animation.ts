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

const slideOutUp = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
      style({ transform: 'translate3d(0, -100%, 0)', visibility: 'hidden', easing: 'ease', offset: 1 })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function slideOutUpAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'slideOutUp', [
    transition('0 <=> 1', [
      useAnimation(slideOutUp, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}

export function slideOutUpOnLeaveAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'slideOutUpOnLeave', [
    transition(':leave', [
      useAnimation(slideOutUp, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}
