import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';
import { useAnimationIncludingChildren } from '../common/use-animation-including-children';

export interface IFadeOutRightAnimationOptions extends IAnimationOptions {
  /**
   * Translate, possible units: px, %, em, rem, vw, vh
   *
   * Default: 100%
   */
  translate?: string;
}

const fadeOutRight = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
        style({ opacity: 0, transform: 'translate3d({{translate}}, 0, 0)', easing: 'ease', offset: 1 })
      ])
    )
  ]);

const DEFAULT_DURATION = 1000;

export function fadeOutRightAnimation(options?: IFadeOutRightAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeOutRight', [
    transition('0 => 1', [...useAnimationIncludingChildren(fadeOutRight(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        translate: (options && options.translate) || '100%'
      }
    })
  ]);
}

export function fadeOutRightOnLeaveAnimation(options?: IFadeOutRightAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeOutRightOnLeave', [
    transition(':leave', [...useAnimationIncludingChildren(fadeOutRight(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        translate: (options && options.translate) || '100%'
      }
    })
  ]);
}
