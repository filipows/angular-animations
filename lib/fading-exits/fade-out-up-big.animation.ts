import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';
import { useAnimationIncludingChildren } from '../common/use-animation-including-children';

export interface IFadeOutUpBigAnimationOptions extends IAnimationOptions {
  /**
   * Translate, possible units: px, %, em, rem, vw, vh
   *
   * Default: 2000px
   */
  translate?: string;
}

const fadeOutUpBig = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
        style({ opacity: 0, transform: 'translate3d(0, -{{translate}}, 0)', easing: 'ease', offset: 1 })
      ])
    )
  ]);

const DEFAULT_DURATION = 1000;

export function fadeOutUpBigAnimation(options?: IFadeOutUpBigAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeOutUpBig', [
    transition('0 => 1', [...useAnimationIncludingChildren(fadeOutUpBig(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        translate: (options && options.translate) || '2000px'
      }
    })
  ]);
}

export function fadeOutUpBigOnLeaveAnimation(options?: IFadeOutUpBigAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeOutUpBigOnLeave', [
    transition(':leave', [...useAnimationIncludingChildren(fadeOutUpBig(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        translate: (options && options.translate) || '2000px'
      }
    })
  ]);
}
