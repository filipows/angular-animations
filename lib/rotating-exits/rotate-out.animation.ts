import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';
import { useAnimationIncludingChildren } from '../common/use-animation-including-children';

export interface IRotateOutAnimationOptions extends IAnimationOptions {
  /**
   * Angle - number of degrees at which end animation.
   *
   * Default 200
   */
  degrees?: number;
}

const rotateOut = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ opacity: 1, easing: 'ease', offset: 0 }),
        style({ opacity: 0, transform: 'rotate({{degrees}}deg)', easing: 'ease', offset: 1 })
      ])
    )
  ]);

const DEFAULT_DURATION = 1000;

export function rotateOutAnimation(options?: IRotateOutAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'rotateOut', [
    transition('0 => 1', [style({ 'transform-origin': 'center' }), ...useAnimationIncludingChildren(rotateOut(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        degrees: (options && options.degrees) || 200
      }
    })
  ]);
}

export function rotateOutOnLeaveAnimation(options?: IRotateOutAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'rotateOutOnLeave', [
    transition(':leave', [style({ 'transform-origin': 'center' }), ...useAnimationIncludingChildren(rotateOut(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        degrees: (options && options.degrees) || 200
      }
    })
  ]);
}
