import {
  animate,
  animation,
  AnimationTriggerMetadata,
  group,
  keyframes,
  style,
  transition,
  trigger,
  useAnimation
} from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';

const rotateOutUpLeft = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ opacity: 1, easing: 'ease', offset: 0 }),
      style({ opacity: 0, transform: 'rotate3d(0, 0, 1, -45deg)', easing: 'ease', offset: 1 })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function rotateOutUpLeftAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'rotateOutUpLeft', [
    transition('0 <=> 1', [
      style({ 'transform-origin': 'left bottom' }),
      useAnimation(rotateOutUpLeft, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}

export function rotateOutUpLeftOnLeaveAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'rotateOutUpLeftOnLeave', [
    transition(':leave', [
      style({ 'transform-origin': 'left bottom' }),
      useAnimation(rotateOutUpLeft, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}
