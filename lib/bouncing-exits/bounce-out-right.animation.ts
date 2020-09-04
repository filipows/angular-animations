import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';
import { useAnimationIncludingChildren } from '../common/use-animation-including-children';

export interface IBounceOutRightAnimationOptions extends IAnimationOptions {
  /**
   * Translate, possible units: px, %, em, rem, vw, vh
   *
   * Default: 2000px
   */
  translate?: string;
}

const bounceOutRight = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
        style({ opacity: 1, transform: 'translate3d(-20px, 0, 0)', easing: 'ease', offset: 0.2 }),
        style({ opacity: 0, transform: 'translate3d({{translate}}, 0, 0)', easing: 'ease', offset: 1 })
      ])
    )
  ]);

const DEFAULT_DURATION = 1000;

export function bounceOutRightAnimation(options?: IBounceOutRightAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'bounceOutRight', [
    transition('0 => 1', [...useAnimationIncludingChildren(bounceOutRight(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        translate: (options && options.translate) || '2000px'
      }
    })
  ]);
}

export function bounceOutRightOnLeaveAnimation(options?: IBounceOutRightAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'bounceOutRightOnLeave', [
    transition(':leave', [...useAnimationIncludingChildren(bounceOutRight(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        translate: (options && options.translate) || '2000px'
      }
    })
  ]);
}
