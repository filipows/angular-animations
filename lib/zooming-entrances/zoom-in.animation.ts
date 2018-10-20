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

const zoomIn = animation(
  group([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ opacity: 0, easing: 'ease', offset: 0 }),
        style({ opacity: 1, easing: 'ease', offset: 0.5 }),
        style({ opacity: 1, easing: 'ease', offset: 1 })
      ])
    ),
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ transform: 'scale3d(0.3, 0.3, 0.3)', easing: 'ease', offset: 0 }),
        style({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 1 })
      ])
    )
  ])
);

const DEFAULT_DURATION = 1000;

export function zoomInAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'zoomIn', [
    transition('0 <=> 1', [
      useAnimation(zoomIn, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}

export function zoomInOnEnterAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'zoomInOnEnter', [
    transition(':enter', [
      useAnimation(zoomIn, {
        params: {
          duration: (options && options.duration) || DEFAULT_DURATION,
          delay: (options && options.delay) || 0
        }
      })
    ])
  ]);
}
