import { animate, animation, AnimationTriggerMetadata, group, keyframes, style, transition, trigger } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';
import { useAnimationIncludingChildren } from '../common/use-animation-including-children';

export interface IBounceOutUpAnimationOptions extends IAnimationOptions {
  /**
   * Translate, possible units: px, %, em, rem, vw, vh
   *
   * Default: 2000px
   */
  translate?: string;
}

const bounceOutUp = () =>
  animation(
    group([
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
          style({ transform: 'translate3d(0, -10px, 0)', easing: 'ease', offset: 0.2 }),
          style({ transform: 'translate3d(0, 20px, 0)', easing: 'ease', offset: 0.4 }),
          style({ transform: 'translate3d(0, 20px, 0)', easing: 'ease', offset: 0.45 }),
          style({ transform: 'translate3d(0, -{{translate}}, 0)', easing: 'ease', offset: 1 })
        ])
      ),
      animation([
        animate(
          '{{duration}}ms {{delay}}ms',
          keyframes([
            style({ opacity: 1, easing: 'ease', offset: 0 }),
            style({ opacity: 1, easing: 'ease', offset: 0.45 }),
            style({ opacity: 0, easing: 'ease', offset: 1 })
          ])
        )
      ])
    ])
  );

const DEFAULT_DURATION = 1000;

export function bounceOutUpAnimation(options?: IBounceOutUpAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'bounceOutUp', [
    transition('0 => 1', [...useAnimationIncludingChildren(bounceOutUp(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        translate: (options && options.translate) || '2000px'
      }
    })
  ]);
}

export function bounceOutUpOnLeaveAnimation(options?: IBounceOutUpAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'bounceOutUpOnLeave', [
    transition(':leave', [...useAnimationIncludingChildren(bounceOutUp(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        translate: (options && options.translate) || '2000px'
      }
    })
  ]);
}
