import { animate, animation, AnimationTriggerMetadata, group, keyframes, style, transition, trigger } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';
import { useAnimationIncludingChildren } from '../common/use-animation-including-children';

const bounceOut = () =>
  animation(
    group([
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 0 }),
          style({ transform: 'scale3d(0.9, 0.9, 0.9)', easing: 'ease', offset: 0.2 }),
          style({ transform: 'scale3d(1.1, 1.1, 1.1)', easing: 'ease', offset: 0.5 }),
          style({ transform: 'scale3d(1.1, 1.1, 1.1)', easing: 'ease', offset: 0.55 }),
          style({ transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'ease', offset: 1 })
        ])
      ),
      animate(
        '{{duration}}ms {{delay}}ms',
        keyframes([
          style({ opacity: 1, easing: 'ease', offset: 0 }),
          style({ opacity: 1, easing: 'ease', offset: 0.55 }),
          style({ opacity: 0, easing: 'ease', offset: 1 })
        ])
      )
    ])
  );

const DEFAULT_DURATION = 750;

export function bounceOutAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'bounceOut', [
    transition('0 => 1', [...useAnimationIncludingChildren(bounceOut(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}

export function bounceOutOnLeaveAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'bounceOutOnLeave', [
    transition(':leave', [...useAnimationIncludingChildren(bounceOut(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}
