import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger } from '@angular/animations';

import { IAnimationOptions, Easing } from '../common/interfaces';
import { useAnimationIncludingChildren } from '../common/use-animation-including-children';

export interface IFadeInUpAnimationOptions extends IAnimationOptions {
  /**
   * Translate, possible units: px, %, em, rem, vw, vh
   *
   * Default: 100%
   */
  translate?: string;

  /**
   * Easing
   *
   * Default: 'ease'
   */
  easing?: Easing;
}

const fadeInUp = (easing: Easing = DEFAULT_EASING) =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ visibility: 'visible', opacity: 0, transform: 'translate3d(0, {{translate}}, 0)', easing, offset: 0 }),
        style({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing, offset: 1 })
      ])
    )
  ]);

const DEFAULT_DURATION = 1000;
const DEFAULT_EASING: Easing = 'ease';

export function fadeInUpAnimation(options?: IFadeInUpAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeInUp', [
    transition('0 => 1', [style({ visibility: 'hidden' }), ...useAnimationIncludingChildren(fadeInUp(options?.easing), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        translate: (options && options.translate) || '100%'
      }
    })
  ]);
}

export function fadeInUpOnEnterAnimation(options?: IFadeInUpAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeInUpOnEnter', [
    transition(':enter', [style({ visibility: 'hidden' }), ...useAnimationIncludingChildren(fadeInUp(options?.easing), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        translate: (options && options.translate) || '100%'
      }
    })
  ]);
}
