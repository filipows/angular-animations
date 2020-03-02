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

export interface IRotateInDownRightAnimationOptions extends IAnimationOptions {
  /**
   * Angle - number of degrees from which to start animation.
   *
   * Default 45
   */
  degrees?: number;
}

const rotateInDownRight = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ visibility: 'visible', opacity: 0, transform: 'rotate3d(0, 0, 1, {{degrees}}deg)', easing: 'ease', offset: 0 }),
        style({ opacity: 1, transform: 'rotate3d(0, 0, 1, 0deg)', easing: 'ease', offset: 1 })
      ])
    )
  ]);

const DEFAULT_DURATION = 1000;

export function rotateInDownRightAnimation(options?: IRotateInDownRightAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'rotateInDownRight', [
    transition(
      '0 => 1',
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        style({ 'transform-origin': 'right bottom' }),
        group([
          useAnimation(rotateInDownRight()),
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
          degrees: (options && options.degrees) || 45
        }
      }
    )
  ]);
}

export function rotateInDownRightOnEnterAnimation(options?: IRotateInDownRightAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'rotateInDownRightOnEnter', [
    transition(
      ':enter',
      [
        style({ visibility: 'hidden' }),
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        style({ 'transform-origin': 'right bottom' }),
        group([
          useAnimation(rotateInDownRight()),
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
          degrees: (options && options.degrees) || 45
        }
      }
    )
  ]);
}
