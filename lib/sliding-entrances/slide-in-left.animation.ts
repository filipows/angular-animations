import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger } from '@angular/animations';

import { IAnimationOptions, Easing } from '../common/interfaces';
import { useAnimationIncludingChildren } from '../common/use-animation-including-children';

const DEFAULT_DURATION = 1000;
const DEFAULT_EASING: Easing = 'ease';

export interface ISlideInLeftAnimationOptions extends IAnimationOptions {
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

const slideInLeft = (easing: Easing = DEFAULT_EASING) =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ visibility: 'visible', transform: 'translate3d(-{{translate}}, 0, 0)', easing, offset: 0 }),
        style({ transform: 'translate3d(0, 0, 0)', easing, offset: 1 })
      ])
    )
  ]);

export function slideInLeftAnimation(options?: ISlideInLeftAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'slideInLeft', [
    transition('0 => 1', [style({ visibility: 'hidden' }), ...useAnimationIncludingChildren(slideInLeft(options?.easing), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        translate: (options && options.translate) || '100%'
      }
    })
  ]);
}

export function slideInLeftOnEnterAnimation(options?: ISlideInLeftAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'slideInLeftOnEnter', [
    transition(':enter', [style({ visibility: 'hidden' }), ...useAnimationIncludingChildren(slideInLeft(options?.easing), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        translate: (options && options.translate) || '100%'
      }
    })
  ]);
}
