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

const bounceInUp = animation(
  group([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ transform: 'translate3d(0, 3000px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
        style({ transform: 'translate3d(0, -20px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
        style({ transform: 'translate3d(0, 10px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.75 }),
        style({ transform: 'translate3d(0, -5px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.9 }),
        style({ transform: 'translate3d(0, -5px, 0)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
      ])
    ),
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ visibility: 'visible', opacity: 0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
        style({ opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
        style({ opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
      ])
    )
  ])
);

const DEFAULT_DURATION = 1000;

export function bounceInUpAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'bounceInUp', [
    transition('0 <=> 1', [
      useAnimation(bounceInUp, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}

export function bounceInUpOnEnterAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'bounceInUpOnEnter', [
    transition(':enter', [
      style({ visibility: 'hidden' }),
      useAnimation(bounceInUp, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}
