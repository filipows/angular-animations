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

const bounceIn = () =>
  animation(
    group([
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
          style({ transform: 'scale3d(1.1, 1.1, 1.1)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.2 }),
          style({ transform: 'scale3d(0.9, 0.9, 0.9)', easing: 'cubibezier(0.215, 0.61, 0.355, 1)', offset: 0.4 }),
          style({ transform: 'scale3d(1.03, 1.03, 1.03)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
          style({ transform: 'scale3d(0.97, 0.97, 0.97)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.8 }),
          style({ transform: 'scale3d(1, 1, 1)', easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
        ])
      ),
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ visibility: 'visible', opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
          style({ opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6 }),
          style({ opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
        ])
      )
    ])
  );

const DEFAULT_DURATION = 750;

export function bounceInAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'bounceIn', [
    transition(
      '0 => 1',
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          useAnimation(bounceIn()),
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

export function bounceInOnEnterAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'bounceInOnEnter', [
    transition(
      ':enter',
      animation([
        style({ visibility: 'hidden' }),
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          useAnimation(bounceIn()),
          ...(!options || !options.animateChildren || options.animateChildren === 'together'
            ? [query('@*', animateChild(), { optional: true })]
            : [])
        ]),
        ...(options && options.animateChildren === 'after' ? [query('@*', animateChild(), { optional: true })] : [])
      ]),
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      }
    )
  ]);
}
