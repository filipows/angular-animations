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

const flipInY = animation([
  animate(
    '{{duration}}ms {{delay}}ms',
    keyframes([
      style({ visibility: 'visible', transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: 0, easing: 'ease-in', offset: 0 }),
      style({ transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', opacity: 0.5, easing: 'ease-in', offset: 0.4 }),
      style({ transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: 1, easing: 'ease-in', offset: 0.6 }),
      style({ transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', easing: 'ease', offset: 0.8 }),
      style({ transform: 'perspective(400px)', easing: 'ease', offset: 1 })
    ])
  )
]);

const DEFAULT_DURATION = 1000;

export function flipInYAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'flipInY', [
    transition(
      '0 <=> 1',
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          style({ 'backface-visibility': 'visible' }),
          useAnimation(flipInY, {
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

export function flipInYOnEnterAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'flipInYOnEnter', [
    transition(
      ':enter',
      [
        style({ visibility: 'hidden' }),
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          style({ 'backface-visibility': 'visible' }),
          useAnimation(flipInY, {
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
