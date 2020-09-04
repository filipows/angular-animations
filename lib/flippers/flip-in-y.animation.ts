import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';
import { useAnimationIncludingChildren } from '../common/use-animation-including-children';

export interface IFlipInYAnimationOptions extends IAnimationOptions {
  /**
   * Angle -number of degrees from which to start animation.
   *
   * Default 90
   */
  degrees?: number;
}

const flipInY = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({
          visibility: 'visible',
          transform: 'perspective(400px) rotate3d(0, 1, 0, {{degrees}}deg)',
          opacity: 0,
          easing: 'ease-in',
          offset: 0
        }),
        style({ transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', opacity: 0.5, easing: 'ease-in', offset: 0.4 }),
        style({ transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: 1, easing: 'ease-in', offset: 0.6 }),
        style({ transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', easing: 'ease', offset: 0.8 }),
        style({ transform: 'perspective(400px)', easing: 'ease', offset: 1 })
      ])
    )
  ]);

const DEFAULT_DURATION = 1000;

export function flipInYAnimation(options?: IFlipInYAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'flipInY', [
    transition(
      '0 => 1',
      [style({ visibility: 'hidden' }), style({ 'backface-visibility': 'visible' }), ...useAnimationIncludingChildren(flipInY(), options)],
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

export function flipInYOnEnterAnimation(options?: IFlipInYAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'flipInYOnEnter', [
    transition(
      ':enter',
      [style({ visibility: 'hidden' }), style({ 'backface-visibility': 'visible' }), ...useAnimationIncludingChildren(flipInY(), options)],
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
