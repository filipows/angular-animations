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

const zoomOutRight = animation(
  group([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ opacity: 1, transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)', easing: 'ease', offset: 0.4 }),
        style({ opacity: 0, transform: 'scale3d(0.1, 0.1, 0.1) translate3d(2000px, 0, 0)', easing: 'ease', offset: 1 })
      ])
    ),
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([style({ 'transform-origin': 'center center', offset: 0 }), style({ 'transform-origin': 'right center', offset: 0.4 })])
    )
  ])
);

const DEFAULT_DURATION = 1000;

export function zoomOutRightAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'zoomOutRight', [
    transition('0 <=> 1', [
      useAnimation(zoomOutRight, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}

export function zoomOutRightOnLeaveAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'zoomOutRightOnLeave', [
    transition(':leave', [
      useAnimation(zoomOutRight, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}
