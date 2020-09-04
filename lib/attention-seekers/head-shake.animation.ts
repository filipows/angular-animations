import { animate, animation, AnimationTriggerMetadata, AUTO_STYLE, keyframes, style, transition, trigger } from '@angular/animations';

import { IAttentionSeekerAnimationOptions } from '../common/interfaces';
import { useAnimationIncludingChildren } from '../common/use-animation-including-children';

const headShake = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ visibility: AUTO_STYLE, transform: 'translateX(0)', easing: 'ease-in-out', offset: 0 }),
        style({ transform: 'translateX(-6px) rotateY(-9deg)', easing: 'ease-in-out', offset: 0.065 }),
        style({ transform: 'translateX(5px) rotateY(7deg)', easing: 'ease-in-out', offset: 0.185 }),
        style({ transform: 'translateX(-3px) rotateY(-5deg)', easing: 'ease-in-out', offset: 0.315 }),
        style({ transform: 'translateX(2px) rotateY(3deg)', easing: 'ease-in-out', offset: 0.435 }),
        style({ transform: 'translateX(0)', easing: 'ease-in-out', offset: 0.5 })
      ])
    )
  ]);

const DEFAULT_DURATION = 1000;

export function headShakeAnimation(options?: IAttentionSeekerAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'headShake', [
    transition(`0 ${(options && options.direction) || '<=>'} 1`, [...useAnimationIncludingChildren(headShake(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}

export function headShakeOnEnterAnimation(options?: IAttentionSeekerAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'headShakeOnEnter', [
    transition(':enter', [style({ visibility: 'hidden' }), ...useAnimationIncludingChildren(headShake(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}
