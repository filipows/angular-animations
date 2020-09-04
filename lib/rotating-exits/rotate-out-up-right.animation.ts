import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';
import { useAnimationIncludingChildren } from '../common/use-animation-including-children';

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
    transition('0 => 1', [style({ 'transform-origin': 'right bottom' }), ...useAnimationIncludingChildren(rotateOutUpRight(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        degrees: (options && options.degrees) || 90
      }
    })
  ]);
}

export function rotateOutUpRightOnLeaveAnimation(options?: IRotateOutUpRightAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'rotateOutUpRightOnLeave', [
    transition(':leave', [style({ 'transform-origin': 'right bottom' }), ...useAnimationIncludingChildren(rotateOutUpRight(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        degrees: (options && options.degrees) || 90
      }
    })
  ]);
}
