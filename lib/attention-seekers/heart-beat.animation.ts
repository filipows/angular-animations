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

export interface IHeartBeatAnimationOptions extends IAttentionSeekerAnimationOptions {
  /**
   * Scale factor
   *
   * Default: 1.3
   */
  scale?: number;
}

const heartBeat = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ visibility: AUTO_STYLE, transform: 'scale(1)', easing: 'ease-in-out', offset: 0 }),
        style({ transform: 'scale({{scale}})', easing: 'ease-in-out', offset: 0.14 }),
        style({ transform: 'scale(1)', easing: 'ease-in-out', offset: 0.28 }),
        style({ transform: 'scale({{scale}})', easing: 'ease-in-out', offset: 0.42 }),
        style({ transform: 'scale(1)', easing: 'ease-in-out', offset: 0.7 })
      ])
    )
  ]);

const DEFAULT_DURATION = 1300;
const DEFAULT_SCALE = 1.3;

export function heartBeatAnimation(options?: IHeartBeatAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'heartBeat', [
    transition(
      `0 ${(options && options.direction) || '<=>'} 1`,
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          useAnimation(heartBeat()),
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
          scale: (options && options.scale) || DEFAULT_SCALE
        }
      }
    )
  ]);
}

export function heartBeatOnEnterAnimation(options?: IHeartBeatAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'heartBeatOnEnter', [
    transition(
      ':enter',
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        style({ visibility: 'hidden' }),
        group([
          useAnimation(heartBeat()),
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
          scale: (options && options.scale) || DEFAULT_SCALE
        }
      }
    )
  ]);
}
