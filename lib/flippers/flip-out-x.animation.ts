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

const flipOutX = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ transform: 'perspective(400px)', opacity: 1, easing: 'ease', offset: 0 }),
      style({ transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: 1, easing: 'ease', offset: 0.3 }),
      style({ transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: 0, easing: 'ease', offset: 1 })
    ])
  )
]);

const DEFAULT_DURATION = 750;

export function flipOutXAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'flipOutX', [
    transition(
      '0 <=> 1',
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          style({ 'backface-visibility': 'visible' }),
          useAnimation(flipOutX, {
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

export function flipOutXOnLeaveAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'flipOutXOnLeave', [
    transition(
      ':leave',
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          style({ 'backface-visibility': 'visible' }),
          useAnimation(flipOutX, {
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
