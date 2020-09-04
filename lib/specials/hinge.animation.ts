import { animate, animation, AnimationTriggerMetadata, keyframes, style, transition, trigger } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';
import { useAnimationIncludingChildren } from '../common/use-animation-including-children';

const hinge = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ opacity: 1, 'transform-origin': 'top left', transform: 'translate3d(0, 0, 0)', easing: 'ease-in-out', offset: 0 }),
        style({ opacity: 1, 'transform-origin': 'top left', transform: 'rotate3d(0, 0, 1, 80deg)', easing: 'ease-in-out', offset: 0.2 }),
        style({ opacity: 1, 'transform-origin': 'top left', transform: 'rotate3d(0, 0, 1, 60deg)', easing: 'ease-in-out', offset: 0.4 }),
        style({ opacity: 1, 'transform-origin': 'top left', transform: 'rotate3d(0, 0, 1, 80deg)', easing: 'ease-in-out', offset: 0.6 }),
        style({ opacity: 1, 'transform-origin': 'top left', transform: 'rotate3d(0, 0, 1, 60deg)', easing: 'ease-in-out', offset: 0.8 }),
        style({ opacity: 0, 'transform-origin': 'top left', transform: 'translate3d(0, 700px, 0)', easing: 'ease-in-out', offset: 1 })
      ])
    )
  ]);

const DEFAULT_DURATION = 2000;

export function hingeAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'hinge', [
    transition('0 => 1', [...useAnimationIncludingChildren(hinge(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}

export function hingeOnLeaveAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'hingeOnLeave', [
    transition(':leave', [...useAnimationIncludingChildren(hinge(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}
