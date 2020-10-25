import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger } from '@angular/animations';

import { IAnimationOptions, Easing } from '../common/interfaces';
import { useAnimationIncludingChildren } from '../common/use-animation-including-children';

const DEFAULT_DURATION = 1000;
const DEFAULT_EASING: Easing = 'ease';

export interface IFadeOutAnimationOptions extends IAnimationOptions {
  /**
   * Easing
   *
   * Default: 'ease'
   */
  easing?: Easing;
}

const fadeOut = (easing: Easing = DEFAULT_EASING) =>
  animation([
    animate('{{duration}}ms {{delay}}ms', keyframes([style({ opacity: 1, easing, offset: 0 }), style({ opacity: 0, easing, offset: 1 })]))
  ]);

export function fadeOutAnimation(options?: IFadeOutAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeOut', [
    transition('0 => 1', [...useAnimationIncludingChildren(fadeOut(options?.easing), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}

export function fadeOutOnLeaveAnimation(options?: IFadeOutAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeOutOnLeave', [
    transition(':leave', [...useAnimationIncludingChildren(fadeOut(options?.easing), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}
