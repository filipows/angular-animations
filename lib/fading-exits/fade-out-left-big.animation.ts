import {
  animate,
  animateChild,
  animation,
  AnimationTriggerMetadata,
  group,
  keyframes,
  query,
  style,
  transition,
  trigger,
  useAnimation
} from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';

const fadeOutLeftBig = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
      style({ opacity: 0, transform: 'translate3d(-2000px, 0, 0)', easing: 'ease', offset: 1 })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function fadeOutLeftBigAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeOutLeftBig', [
    transition(
      '0 <=> 1',
      [
        ...(options && options.animateChildren === 'before'
          ? [query('@*', animateChild({ delay: (options && options.delayChildren) || 0 }), { optional: true })]
          : []),
        group([
          useAnimation(fadeOutLeftBig, {
            params: {
              duration: '{{duration}}',
              delay: '{{delay}}'
            }
          }),
          ...(!options || !options.animateChildren || options.animateChildren === 'together'
            ? [query('@*', animateChild({ delay: (options && options.delayChildren) || 0 }), { optional: true })]
            : [])
        ]),
        ...(options && options.animateChildren === 'after'
          ? [query('@*', animateChild({ delay: (options && options.delayChildren) || 0 }), { optional: true })]
          : [])
      ],
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      }
    )
  ]);
}

export function fadeOutLeftBigOnLeaveAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeOutLeftBigOnLeave', [
    transition(
      ':leave',
      [
        ...(options && options.animateChildren === 'before'
          ? [query('@*', animateChild({ delay: (options && options.delayChildren) || 0 }), { optional: true })]
          : []),
        group([
          useAnimation(fadeOutLeftBig, {
            params: {
              duration: '{{duration}}',
              delay: '{{delay}}'
            }
          }),
          ...(!options || !options.animateChildren || options.animateChildren === 'together'
            ? [query('@*', animateChild({ delay: (options && options.delayChildren) || 0 }), { optional: true })]
            : [])
        ]),
        ...(options && options.animateChildren === 'after'
          ? [query('@*', animateChild({ delay: (options && options.delayChildren) || 0 }), { optional: true })]
          : [])
      ],
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      }
    )
  ]);
}
