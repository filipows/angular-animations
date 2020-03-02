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

export interface IRotateOutUpRightAnimationOptions extends IAnimationOptions {
  /**
   * Angle - number of degrees at which end animation.
   *
   * Default 90
   */
  degrees?: number;
}

const rotateOutUpRight = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ opacity: 1, easing: 'ease', offset: 0 }),
        style({ opacity: 0, transform: 'rotate3d(0, 0, 1, {{degrees}}deg)', easing: 'ease', offset: 1 })
      ])
    )
  ]);

const DEFAULT_DURATION = 1000;

export function rotateOutUpRightAnimation(options?: IRotateOutUpRightAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'rotateOutUpRight', [
    transition(
      '0 => 1',
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        style({ 'transform-origin': 'right bottom' }),
        group([
          useAnimation(rotateOutUpRight()),
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
          degrees: (options && options.degrees) || 90
        }
      }
    )
  ]);
}

export function rotateOutUpRightOnLeaveAnimation(options?: IRotateOutUpRightAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'rotateOutUpRightOnLeave', [
    transition(
      ':leave',
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        style({ 'transform-origin': 'right bottom' }),
        group([
          useAnimation(rotateOutUpRight()),
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
          degrees: (options && options.degrees) || 90
        }
      }
    )
  ]);
}
