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

const slideInUp = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ transform: 'translate3d(0, 100%, 0)', easing: 'ease', offset: 0 }),
      style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function slideInUpAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'slideInUp', [
    transition('0 <=> 1', [
      style({ visibility: 'visible' }),
      useAnimation(slideInUp, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}

export function slideInUpOnEnterAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'slideInUpOnEnter', [
    transition(':enter', [
      style({ visibility: 'visible' }),
      useAnimation(slideInUp, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}
