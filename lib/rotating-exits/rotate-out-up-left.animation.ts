import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';
import { useAnimationIncludingChildren } from '../common/use-animation-including-children';

export interface IRotateOutUpLeftAnimationOptions extends IAnimationOptions {
  /**
   * Angle - number of degrees at which end animation.
   *
   * Default -45
   */
  degrees?: number;
}

const rotateOutUpLeft = () =>
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

export function rotateOutUpLeftAnimation(options?: IRotateOutUpLeftAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'rotateOutUpLeft', [
    transition('0 => 1', [style({ 'transform-origin': 'left bottom' }), ...useAnimationIncludingChildren(rotateOutUpLeft(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        degrees: (options && options.degrees) || -45
      }
    })
  ]);
}

export function rotateOutUpLeftOnLeaveAnimation(options?: IRotateOutUpLeftAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'rotateOutUpLeftOnLeave', [
    transition(':leave', [style({ 'transform-origin': 'left bottom' }), ...useAnimationIncludingChildren(rotateOutUpLeft(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        degrees: (options && options.degrees) || -45
      }
    })
  ]);
}
