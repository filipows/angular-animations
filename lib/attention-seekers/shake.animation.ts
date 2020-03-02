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

export interface IShakeAnimationOptions extends IAttentionSeekerAnimationOptions {
  /**
   * Shake size. Possible units: px, %, em, rem, vw, vh
   *
   * Default: 10px
   */
  translate?: string;
}

const shake = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ visibility: AUTO_STYLE, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
        style({ transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 0.1 }),
        style({ transform: 'translate3d({{translate}}, 0, 0)', easing: 'ease', offset: 0.2 }),
        style({ transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 0.3 }),
        style({ transform: 'translate3d({{translate}}, 0, 0)', easing: 'ease', offset: 0.4 }),
        style({ transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 0.5 }),
        style({ transform: 'translate3d({{translate}}, 0, 0)', easing: 'ease', offset: 0.6 }),
        style({ transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 0.7 }),
        style({ transform: 'translate3d({{translate}}, 0, 0)', easing: 'ease', offset: 0.8 }),
        style({ transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 0.9 }),
        style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
      ])
    )
  ]);

const DEFAULT_DURATION = 1000;
export function shakeAnimation(options?: IShakeAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'shake', [
    transition(
      `0 ${(options && options.direction) || '<=>'} 1`,
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          useAnimation(shake()),
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
          translate: (options && options.translate) || '10px'
        }
      }
    )
  ]);
}

export function shakeOnEnterAnimation(options?: IShakeAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'shakeOnEnter', [
    transition(
      ':enter',
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        style({ visibility: 'hidden' }),
        group([
          useAnimation(shake()),
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
          translate: (options && options.translate) || '10px'
        }
      }
    )
  ]);
}
