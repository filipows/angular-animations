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

const tada = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 0 }),
      style({ transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)', easing: 'ease', offset: 0.1 }),
      style({ transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)', easing: 'ease', offset: 0.2 }),
      style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', easing: 'ease', offset: 0.3 }),
      style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', easing: 'ease', offset: 0.4 }),
      style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', easing: 'ease', offset: 0.5 }),
      style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', easing: 'ease', offset: 0.6 }),
      style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', easing: 'ease', offset: 0.7 }),
      style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', easing: 'ease', offset: 0.8 }),
      style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', easing: 'ease', offset: 0.9 }),
      style({ transform: 'scale3d(1, 1, 1)', easing: 'ease', offset: 1 })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function tadaAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'tada', [
    transition(
      '0 <=> 1',
      [
        ...(options && options.animateChildren === 'before'
          ? [query('@*', animateChild({ delay: (options && options.delayChildren) || 0 }), { optional: true })]
          : []),
        group([
          useAnimation(tada, {
            params: {
              duration: '{{duration}}',
              delay: '{{delay}}'
            }
          }),
          ...(!options || !options.animateChildren || options.animateChildren === 'together'
            ? [query('@*', animateChild({ delay: (options && options.delayChildren) || 0 }), { optional: true })]
            : [])
        ]),
        ...(options && options.animateChildren === 'after'
          ? [query('@*', animateChild({ delay: (options && options.delayChildren) || 0 }), { optional: true })]
          : [])
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
