import {
  animate,
  animateChild,
  animation,
  AnimationTriggerMetadata,
  group,
  keyframes,
  query,
  style,
  transition,
  trigger,
  useAnimation
} from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';

const wobble = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
      style({ transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)', easing: 'ease', offset: 0.15 }),
      style({ transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', easing: 'ease', offset: 0.3 }),
      style({ transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', easing: 'ease', offset: 0.45 }),
      style({ transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', easing: 'ease', offset: 0.6 }),
      style({ transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', easing: 'ease', offset: 0.75 }),
      style({ transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 1 })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function wobbleAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'wobble', [
    transition(
      '0 <=> 1',
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          useAnimation(wobble, {
            params: {
              duration: '{{duration}}',
              delay: '{{delay}}'
            }
          }),
          ...(!options || !options.animateChildren || options.animateChildren === 'together'
            ? [query('@*', animateChild(), { optional: true })]
            : [])
        ]),
        ...(options && options.animateChildren === 'after' ? [query('@*', animateChild(), { optional: true })] : [])
      ],
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      }
    )
  ]);
}
