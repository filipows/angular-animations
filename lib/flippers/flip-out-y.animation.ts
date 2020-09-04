import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';
import { useAnimationIncludingChildren } from '../common/use-animation-including-children';

export interface IFlipOutYAnimationOptions extends IAnimationOptions {
  /**
   * Angle - number of degrees at which end animation.
   *
   * Default 90
   */
  degrees?: number;
}

const flipOutY = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ transform: 'perspective(400px)', opacity: 1, easing: 'ease', offset: 0 }),
        style({ transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)', opacity: 1, easing: 'ease', offset: 0.3 }),
        style({ transform: 'perspective(400px) rotate3d(0, 1, 0, {{degrees}}deg)', opacity: 0, easing: 'ease', offset: 1 })
      ])
    )
  ]);

const DEFAULT_DURATION = 750;

export function flipOutYAnimation(options?: IFlipOutYAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'flipOutY', [
    transition('0 => 1', [style({ 'backface-visibility': 'visible' }), ...useAnimationIncludingChildren(flipOutY(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        degrees: (options && options.degrees) || 90
      }
    })
  ]);
}

export function flipOutYOnLeaveAnimation(options?: IFlipOutYAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'flipOutYOnLeave', [
    transition(':leave', [style({ 'backface-visibility': 'visible' }), ...useAnimationIncludingChildren(flipOutY(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        degrees: (options && options.degrees) || 90
      }
    })
  ]);
}
