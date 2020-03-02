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

import { IAttentionSeekerAnimationOptions } from '../common/interfaces';

export interface IPulseAnimationOptions extends IAttentionSeekerAnimationOptions {
  /**
   * Scale factor
   *
   * Default: 1.05
   */
  scale?: number;
}

const pulse = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ visibility: AUTO_STYLE, transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 0 }),
        style({ transform: 'scale3d({{scale}}, {{scale}}, {{scale}})', easing: 'ease', offset: 0.5 }),
        style({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 1 })
      ])
    )
  ]);

const DEFAULT_DURATION = 1000;

export function pulseAnimation(options?: IPulseAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'pulse', [
    transition(
      `0 ${(options && options.direction) || '<=>'} 1`,
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          useAnimation(pulse()),
          ...(!options || !options.animateChildren || options.animateChildren === 'together'
            ? [query('@*', animateChild(), { optional: true })]
            : [])
        ]),
        ...(options && options.animateChildren === 'after' ? [query('@*', animateChild(), { optional: true })] : [])
      ],
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION,
          scale: (options && options.scale) || 1.05
        }
      }
    )
  ]);
}

export function pulseOnEnterAnimation(options?: IPulseAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'pulseOnEnter', [
    transition(
      ':enter',
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        style({ visibility: 'hidden' }),
        group([
          useAnimation(pulse()),
          ...(!options || !options.animateChildren || options.animateChildren === 'together'
            ? [query('@*', animateChild(), { optional: true })]
            : [])
        ]),
        ...(options && options.animateChildren === 'after' ? [query('@*', animateChild(), { optional: true })] : [])
      ],
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION,
          scale: (options && options.scale) || 1.05
        }
      }
    )
  ]);
}
