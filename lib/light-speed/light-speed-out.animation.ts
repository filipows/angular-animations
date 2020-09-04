import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';
import { useAnimationIncludingChildren } from '../common/use-animation-including-children';

export interface ILightSpeedOutAnimationOptions extends IAnimationOptions {
  /**
   * Translate, possible units: px, %, em, rem, vw, vh
   *
   * Default: 100%
   */
  translate?: string;
}

const lightSpeedOut = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ opacity: 1, easing: 'ease-in', offset: 0 }),
        style({ opacity: 0, transform: 'translate3d({{translate}}, 0, 0) skewX(30deg)', easing: 'ease-in', offset: 1 })
      ])
    )
  ]);

const DEFAULT_DURATION = 1000;

export function lightSpeedOutAnimation(options?: ILightSpeedOutAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'lightSpeedOut', [
    transition('0 => 1', [...useAnimationIncludingChildren(lightSpeedOut(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        translate: (options && options.translate) || '100%'
      }
    })
  ]);
}

export function lightSpeedOutOnLeaveAnimation(options?: ILightSpeedOutAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'lightSpeedOutOnLeave', [
    transition(':leave', [...useAnimationIncludingChildren(lightSpeedOut(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        translate: (options && options.translate) || '100%'
      }
    })
  ]);
}
