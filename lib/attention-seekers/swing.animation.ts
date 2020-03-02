import {
  animate,
  animateChild,
  animation,
  AnimationTriggerMetadata,
  AUTO_STYLE,
  group,
  keyframes,
  query,
  style,
  transition,
  trigger,
  useAnimation
} from '@angular/animations';

import { IAnimationOptions, IAttentionSeekerAnimationOptions } from '../common/interfaces';

const swing = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ visibility: AUTO_STYLE, transform: 'rotate3d(0, 0, 1, 0deg)', easing: 'ease', offset: 0 }),
        style({ transform: 'rotate3d(0, 0, 1, 15deg)', easing: 'ease', offset: 0.2 }),
        style({ transform: 'rotate3d(0, 0, 1, -10deg)', easing: 'ease', offset: 0.4 }),
        style({ transform: 'rotate3d(0, 0, 1, 5deg)', easing: 'ease', offset: 0.6 }),
        style({ transform: 'rotate3d(0, 0, 1, -5deg)', easing: 'ease', offset: 0.8 }),
        style({ transform: 'rotate3d(0, 0, 1, 0deg)', easing: 'ease', offset: 1 })
      ])
    )
  ]);

const DEFAULT_DURATION = 1000;

export function swingAnimation(options?: IAttentionSeekerAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'swing', [
    transition(
      `0 ${(options && options.direction) || '<=>'} 1`,
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          style({ 'transform-origin': 'top center' }),
          useAnimation(swing()),
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

export function swingOnEnterAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'swingOnEnter', [
    transition(
      ':enter',
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        style({ visibility: 'hidden' }),
        group([
          style({ 'transform-origin': 'top center' }),
          useAnimation(swing()),
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
