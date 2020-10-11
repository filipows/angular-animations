import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger } from '@angular/animations';

import { IAnimationOptions, Easing } from '../common/interfaces';
import { useAnimationIncludingChildren } from '../common/use-animation-including-children';

const DEFAULT_DURATION = 1000;
const DEFAULT_EASING: Easing = 'ease';

export interface IFadeInAnimationOptions extends IAnimationOptions {
  /**
   * Easing
   *
   * Default: 'ease'
   */
  easing?: Easing;
}

const fadeIn = (easing: Easing = DEFAULT_EASING) =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([style({ visibility: 'visible', opacity: 0, easing, offset: 0 }), style({ opacity: 1, easing, offset: 1 })])
    )
  ]);

export function fadeInAnimation(options?: IFadeInAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeIn', [
    transition('0 => 1', [style({ visibility: 'hidden' }), ...useAnimationIncludingChildren(fadeIn(options?.easing), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}

export function fadeInOnEnterAnimation(options?: IFadeInAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeInOnEnter', [
    transition(':enter', [style({ visibility: 'hidden' }), ...useAnimationIncludingChildren(fadeIn(options?.easing), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}
