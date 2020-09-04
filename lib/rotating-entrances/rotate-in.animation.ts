import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';
import { useAnimationIncludingChildren } from '../common/use-animation-including-children';

export interface IRotateInAnimationOptions extends IAnimationOptions {
  /**
   * Angle - number of degrees from which to start animation.
   *
   * Default -200
   */
  degrees?: number;
}

const rotateIn = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ visibility: 'visible', opacity: 0, transform: 'rotate({{degrees}}deg)', easing: 'ease', offset: 0 }),
        style({ opacity: 1, transform: 'rotate(0deg)', easing: 'ease', offset: 1 })
      ])
    )
  ]);

const DEFAULT_DURATION = 1000;

export function rotateInAnimation(options?: IRotateInAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'rotateIn', [
    transition(
      '0 => 1',
      [style({ visibility: 'hidden' }), style({ 'transform-origin': 'center' }), ...useAnimationIncludingChildren(rotateIn(), options)],
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION,
          degrees: (options && options.degrees) || -200
        }
      }
    )
  ]);
}

export function rotateInOnEnterAnimation(options?: IRotateInAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'rotateInOnEnter', [
    transition(
      ':enter',
      [style({ visibility: 'hidden' }), style({ 'transform-origin': 'center' }), ...useAnimationIncludingChildren(rotateIn(), options)],
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION,
          degrees: (options && options.degrees) || -200
        }
      }
    )
  ]);
}
