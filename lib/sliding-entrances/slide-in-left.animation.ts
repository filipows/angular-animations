import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';
import { useAnimationIncludingChildren } from '../common/use-animation-including-children';

export interface ISlideInLeftAnimationOptions extends IAnimationOptions {
  /**
   * Translate, possible units: px, %, em, rem, vw, vh
   *
   * Default: 100%
   */
  translate?: string;
}

const slideInLeft = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ visibility: 'visible', transform: 'translate3d(-{{translate}}, 0, 0)', easing: 'ease', offset: 0 }),
        style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
      ])
    )
  ]);

const DEFAULT_DURATION = 1000;

export function slideInLeftAnimation(options?: ISlideInLeftAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'slideInLeft', [
    transition('0 => 1', [style({ visibility: 'hidden' }), ...useAnimationIncludingChildren(slideInLeft(), options)], {
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
    transition(':enter', [style({ visibility: 'hidden' }), ...useAnimationIncludingChildren(slideInLeft(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        translate: (options && options.translate) || '100%'
      }
    })
  ]);
}
