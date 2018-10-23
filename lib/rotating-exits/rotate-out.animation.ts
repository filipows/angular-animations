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

const rotateOut = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ opacity: 1, easing: 'ease', offset: 0 }),
      style({ opacity: 0, transform: 'rotate(200deg)', easing: 'ease', offset: 1 })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function rotateOutAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'rotateOut', [
    transition(
      '0 <=> 1',
      [
        ...(options && options.animateChildren === 'before'
          ? [query('@*', animateChild({ delay: (options && options.delayChildren) || 0 }), { optional: true })]
          : []),
        group([
          style({ 'transform-origin': 'center' }),
          useAnimation(rotateOut, {
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

export function rotateOutOnLeaveAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'rotateOutOnLeave', [
    transition(
      ':leave',
      [
        ...(options && options.animateChildren === 'before'
          ? [query('@*', animateChild({ delay: (options && options.delayChildren) || 0 }), { optional: true })]
          : []),
        group([
          style({ 'transform-origin': 'center' }),
          useAnimation(rotateOut, {
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
