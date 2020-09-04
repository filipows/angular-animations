import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';
import { useAnimationIncludingChildren } from '../common/use-animation-including-children';

export interface ISlideInDownAnimationOptions extends IAnimationOptions {
  /**
   * Translate, possible units: px, %, em, rem, vw, vh
   *
   * Default: 100%
   */
  translate?: string;
}

const slideInDown = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ visibility: 'visible', transform: 'translate3d(0, -{{translate}}, 0)', easing: 'ease', offset: 0 }),
        style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
      ])
    )
  ]);

const DEFAULT_DURATION = 1000;

export function slideInDownAnimation(options?: ISlideInDownAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'slideInDown', [
    transition('0 => 1', [style({ visibility: 'hidden' }), ...useAnimationIncludingChildren(slideInDown(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        translate: (options && options.translate) || '100%'
      }
    })
  ]);
}

export function slideInDownOnEnterAnimation(options?: ISlideInDownAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'slideInDownOnEnter', [
    transition(':enter', [style({ visibility: 'hidden' }), ...useAnimationIncludingChildren(slideInDown(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        translate: (options && options.translate) || '100%'
      }
    })
  ]);
}
