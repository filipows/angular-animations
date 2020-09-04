import { animate, animation, AnimationTriggerMetadata, AUTO_STYLE, keyframes, style, transition, trigger } from '@angular/animations';

import { IAnimationOptions, IAttentionSeekerAnimationOptions } from '../common/interfaces';
import { useAnimationIncludingChildren } from '../common/use-animation-including-children';

const flash = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ visibility: AUTO_STYLE, opacity: 1, easing: 'ease', offset: 0 }),
        style({ opacity: 0, easing: 'ease', offset: 0.25 }),
        style({ opacity: 1, easing: 'ease', offset: 0.5 }),
        style({ opacity: 0, easing: 'ease', offset: 0.75 }),
        style({ opacity: 1, easing: 'ease', offset: 1 })
      ])
    )
  ]);

const DEFAULT_DURATION = 1000;

export function flashAnimation(options?: IAttentionSeekerAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'flash', [
    transition(`0 ${(options && options.direction) || '<=>'} 1`, [...useAnimationIncludingChildren(flash(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}

export function flashOnEnterAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'flashOnEnter', [
    transition(':enter', [style({ visibility: 'hidden' }), ...useAnimationIncludingChildren(flash(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}
