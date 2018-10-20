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

const fadeInRightBig = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ opacity: 0, transform: 'translate3d(2000px, 0, 0)', easing: 'ease', offset: 0 }),
      style({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function fadeInRightBigAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeInRightBig', [
    transition('0 <=> 1', [
      useAnimation(fadeInRightBig, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}

export function fadeInRightBigOnEnterAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeInRightBigOnEnter', [
    transition(':enter', [
      useAnimation(fadeInRightBig, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}
