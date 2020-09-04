import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';
import { useAnimationIncludingChildren } from '../common/use-animation-including-children';

const fadeOut = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([style({ opacity: 1, easing: 'ease', offset: 0 }), style({ opacity: 0, easing: 'ease', offset: 1 })])
    )
  ]);

const DEFAULT_DURATION = 1000;

export function fadeOutAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeOut', [
    transition('0 => 1', [...useAnimationIncludingChildren(fadeOut(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}

export function fadeOutOnLeaveAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeOutOnLeave', [
    transition(':leave', [...useAnimationIncludingChildren(fadeOut(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}
