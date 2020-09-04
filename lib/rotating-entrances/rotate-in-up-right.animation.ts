import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';
import { useAnimationIncludingChildren } from '../common/use-animation-including-children';

export interface IRotateInUpRightAnimationOptions extends IAnimationOptions {
  /**
   * Angle - number of degrees from which to start animation.
   *
   * Default -90
   */
  degrees?: number;
}

const rotateInUpRight = () =>
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

export function rotateInUpRightAnimation(options?: IRotateInUpRightAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'rotateInUpRight', [
    transition(
      '0 => 1',
      [
        style({ visibility: 'hidden' }),
        style({ 'transform-origin': 'right bottom' }),
        ...useAnimationIncludingChildren(rotateInUpRight(), options)
      ],
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION,
          degrees: (options && options.degrees) || -90
        }
      }
    )
  ]);
}

export function rotateInUpRightOnEnterAnimation(options?: IRotateInUpRightAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'rotateInUpRightOnEnter', [
    transition(
      ':enter',
      [
        style({ visibility: 'hidden' }),
        style({ 'transform-origin': 'right bottom' }),
        ...useAnimationIncludingChildren(rotateInUpRight(), options)
      ],
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION,
          degrees: (options && options.degrees) || -90
        }
      }
    )
  ]);
}
