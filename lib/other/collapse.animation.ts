import {
  animate,
  animateChild,
  animation,
  AnimationTriggerMetadata,
  AUTO_STYLE,
  group,
  keyframes,
  query,
  state,
  style,
  transition,
  trigger,
  useAnimation
} from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';

const DEFAULT_DURATION = 200;

export function collapseAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'collapse', [
    state(
      '1',
      style({
        height: '0',
        visibility: 'hidden',
        overflow: 'hidden'
      })
    ),
    state(
      '0',
      style({
        height: AUTO_STYLE,
        visibility: AUTO_STYLE,
        overflow: 'hidden'
      })
    ),
    transition(
      '0 => 1',
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          group([query('@*', animateChild(), { optional: true }), animate('{{duration}}' + 'ms ' + '{{delay}}' + 'ms ' + 'ease-in')]),
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
    ),
    transition(
      '1 => 0',
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          group([query('@*', animateChild(), { optional: true }), animate('{{duration}}' + 'ms ' + '{{delay}}' + 'ms ' + 'ease-out')]),
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

export function collapseHorizontallyAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'collapseHorizontally', [
    state(
      '1',
      style({
        width: '0',
        visibility: 'hidden',
        overflow: 'hidden'
      })
    ),
    state(
      '0',
      style({
        width: AUTO_STYLE,
        visibility: AUTO_STYLE,
        overflow: 'hidden'
      })
    ),
    transition(
      '0 => 1',
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          group([query('@*', animateChild(), { optional: true }), animate('{{duration}}' + 'ms ' + '{{delay}}' + 'ms ' + 'ease-in')]),
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
    ),
    transition(
      '1 => 0',
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          group([query('@*', animateChild(), { optional: true }), animate('{{duration}}' + 'ms ' + '{{delay}}' + 'ms ' + 'ease-out')]),
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

const expand = () =>
  animation(
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ height: '0', visibility: 'hidden', overflow: 'hidden', easing: 'ease-out', offset: 0 }),
        style({ height: AUTO_STYLE, visibility: AUTO_STYLE, overflow: 'hidden', easing: 'ease-out', offset: 1 })
      ])
    )
  );

const expandRight = () =>
  animation(
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ width: '0', visibility: 'hidden', overflow: 'hidden', easing: 'ease-out', offset: 0 }),
        style({ width: AUTO_STYLE, visibility: AUTO_STYLE, overflow: 'hidden', easing: 'ease-out', offset: 1 })
      ])
    )
  );

const fadeInExpand = () =>
  animation(
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ height: '0', opacity: 0, visibility: 'hidden', overflow: 'hidden', easing: 'ease-out', offset: 0 }),
        style({ height: AUTO_STYLE, opacity: AUTO_STYLE, visibility: AUTO_STYLE, overflow: 'hidden', easing: 'ease-out', offset: 1 })
      ])
    )
  );

const fadeInExpandRight = () =>
  animation(
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ width: '0', opacity: 0, visibility: 'hidden', overflow: 'hidden', easing: 'ease-out', offset: 0 }),
        style({ width: AUTO_STYLE, opacity: AUTO_STYLE, visibility: AUTO_STYLE, overflow: 'hidden', easing: 'ease-out', offset: 1 })
      ])
    )
  );

const collapse = () =>
  animation(
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ height: AUTO_STYLE, visibility: AUTO_STYLE, overflow: 'hidden', easing: 'ease-in', offset: 0 }),
        style({ height: '0', visibility: 'hidden', overflow: 'hidden', easing: 'ease-in', offset: 1 })
      ])
    )
  );

const collapseLeft = () =>
  animation(
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ width: AUTO_STYLE, visibility: AUTO_STYLE, overflow: 'hidden', easing: 'ease-in', offset: 0 }),
        style({ width: '0', visibility: 'hidden', overflow: 'hidden', easing: 'ease-in', offset: 1 })
      ])
    )
  );

const fadeOutCollapse = () =>
  animation(
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ height: AUTO_STYLE, opacity: AUTO_STYLE, visibility: AUTO_STYLE, overflow: 'hidden', easing: 'ease-in', offset: 0 }),
        style({ height: '0', opacity: 0, visibility: 'hidden', overflow: 'hidden', easing: 'ease-in', offset: 1 })
      ])
    )
  );

const fadeOutCollapseLeft = () =>
  animation(
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ width: AUTO_STYLE, opacity: AUTO_STYLE, visibility: AUTO_STYLE, overflow: 'hidden', easing: 'ease-in', offset: 0 }),
        style({ width: '0', opacity: 0, visibility: 'hidden', overflow: 'hidden', easing: 'ease-in', offset: 1 })
      ])
    )
  );

export function expandOnEnterAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'expandOnEnter', [
    transition(
      ':enter',
      animation([
        style({ visibility: 'hidden' }),
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          useAnimation(expand()),
          ...(!options || !options.animateChildren || options.animateChildren === 'together'
            ? [query('@*', animateChild(), { optional: true })]
            : [])
        ]),
        ...(options && options.animateChildren === 'after' ? [query('@*', animateChild(), { optional: true })] : [])
      ]),
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      }
    )
  ]);
}

export function expandRightOnEnterAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'expandRightOnEnter', [
    transition(
      ':enter',
      animation([
        style({ visibility: 'hidden' }),
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          useAnimation(expandRight()),
          ...(!options || !options.animateChildren || options.animateChildren === 'together'
            ? [query('@*', animateChild(), { optional: true })]
            : [])
        ]),
        ...(options && options.animateChildren === 'after' ? [query('@*', animateChild(), { optional: true })] : [])
      ]),
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      }
    )
  ]);
}

export function collapseOnLeaveAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'collapseOnLeave', [
    transition(
      ':leave',
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          useAnimation(collapse()),
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

export function collapseLeftOnLeaveAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'collapseLeftOnLeave', [
    transition(
      ':leave',
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          useAnimation(collapseLeft()),
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

export function fadeInExpandOnEnterAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeInExpandOnEnter', [
    transition(
      ':enter',
      animation([
        style({ visibility: 'hidden' }),
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          useAnimation(fadeInExpand()),
          ...(!options || !options.animateChildren || options.animateChildren === 'together'
            ? [query('@*', animateChild(), { optional: true })]
            : [])
        ]),
        ...(options && options.animateChildren === 'after' ? [query('@*', animateChild(), { optional: true })] : [])
      ]),
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      }
    )
  ]);
}

export function fadeInExpandRightOnEnterAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeInExpandRightOnEnter', [
    transition(
      ':enter',
      animation([
        style({ visibility: 'hidden' }),
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          useAnimation(fadeInExpandRight()),
          ...(!options || !options.animateChildren || options.animateChildren === 'together'
            ? [query('@*', animateChild(), { optional: true })]
            : [])
        ]),
        ...(options && options.animateChildren === 'after' ? [query('@*', animateChild(), { optional: true })] : [])
      ]),
      {
        params: {
          delay: (options && options.delay) || 0,
          duration: (options && options.duration) || DEFAULT_DURATION
        }
      }
    )
  ]);
}

export function fadeOutCollapseOnLeaveAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeOutCollapseOnLeave', [
    transition(
      ':leave',
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          useAnimation(fadeOutCollapse()),
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

export function fadeOutCollapseLeftOnLeaveAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeOutCollapseLeftOnLeave', [
    transition(
      ':leave',
      [
        ...(options && options.animateChildren === 'before' ? [query('@*', animateChild(), { optional: true })] : []),
        group([
          useAnimation(fadeOutCollapseLeft()),
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
