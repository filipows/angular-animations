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

const lightSpeedIn = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ visibility: 'visible', opacity: 0, transform: 'translate3d(100%, 0, 0) skewX(-30deg)', easing: 'ease-out', offset: 0 }),
      style({ opacity: 1, transform: 'skewX(20deg)', easing: 'ease-out', offset: 0.6 }),
      style({ opacity: 1, transform: 'skewX(-5deg)', easing: 'ease-out', offset: 0.8 }),
      style({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease-out', offset: 1 })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function lightSpeedInAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'lightSpeedIn', [
    transition(
      '0 <=> 1',
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          useAnimation(lightSpeedIn, {
            params: {
              duration: '{{duration}}',
              delay: '{{delay}}'
            }
          }),
          ...(!options || !options.animateChildren || options.animateChildren === 'together'
            ? [query('@*', animateChild(), { optional: true })]
            : [])
        ]),
        ...(options && options.animateChildren === 'after' ? [query('@*', animateChild(), { optional: true })] : [])
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

export function lightSpeedInOnEnterAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'lightSpeedInOnEnter', [
    transition(
      ':enter',
      [
        style({ visibility: 'hidden' }),
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          useAnimation(lightSpeedIn, {
            params: {
              duration: '{{duration}}',
              delay: '{{delay}}'
            }
          }),
          ...(!options || !options.animateChildren || options.animateChildren === 'together'
            ? [query('@*', animateChild(), { optional: true })]
            : [])
        ]),
        ...(options && options.animateChildren === 'after' ? [query('@*', animateChild(), { optional: true })] : [])
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
