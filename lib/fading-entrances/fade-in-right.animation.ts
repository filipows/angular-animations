import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';
import { useAnimationIncludingChildren } from '../common/use-animation-including-children';

export interface IFadeInRightgAnimationOptions extends IAnimationOptions {
  /**
   * Translate, possible units: px, %, em, rem, vw, vh
   *
   * Default: 100%
   */
  translate?: string;
}

const fadeInRight = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ visibility: 'visible', opacity: 0, transform: 'translate3d({{translate}}, 0, 0)', easing: 'ease', offset: 0 }),
        style({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
      ])
    )
  ]);

const DEFAULT_DURATION = 1000;

export function fadeInRightAnimation(options?: IFadeInRightgAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeInRight', [
    transition('0 => 1', [style({ visibility: 'hidden' }), ...useAnimationIncludingChildren(fadeInRight(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        translate: (options && options.translate) || '100%'
      }
    })
  ]);
}

export function fadeInRightOnEnterAnimation(options?: IFadeInRightgAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeInRightOnEnter', [
    transition(':enter', [style({ visibility: 'hidden' }), ...useAnimationIncludingChildren(fadeInRight(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        translate: (options && options.translate) || '100%'
      }
    })
  ]);
}
