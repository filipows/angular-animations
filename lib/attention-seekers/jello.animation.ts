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

const jello = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ visibility: AUTO_STYLE, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
        style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0.111 }),
        style({ transform: 'skewX(-12.5deg) skewY(-12.5deg)', easing: 'ease', offset: 0.222 }),
        style({ transform: 'skewX(6.25deg) skewY(6.25deg)', easing: 'ease', offset: 0.333 }),
        style({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', easing: 'ease', offset: 0.444 }),
        style({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', easing: 'ease', offset: 0.555 }),
        style({ transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', easing: 'ease', offset: 0.666 }),
        style({ transform: 'skewX(0.390625deg) skewY(0.390625deg)', easing: 'ease', offset: 0.777 }),
        style({ transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', easing: 'ease', offset: 0.888 }),
        style({ transform: 'skewX(0deg) skewY(0deg)', easing: 'ease', offset: 1 })
      ])
    )
  ]);

const DEFAULT_DURATION = 1000;

export function jelloAnimation(options?: IAttentionSeekerAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'jello', [
    transition(
      `0 ${(options && options.direction) || '<=>'} 1`,
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          style({ 'transform-origin': 'center' }),
          useAnimation(jello()),
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

export function jelloOnEnterAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'jelloOnEnter', [
    transition(
      ':enter',
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        style({ visibility: 'hidden' }),
        group([
          style({ 'transform-origin': 'center' }),
          useAnimation(jello()),
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
