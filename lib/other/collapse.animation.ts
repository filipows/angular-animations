import {
  animate,
  animation,
  AnimationTriggerMetadata,
  AUTO_STYLE,
  keyframes,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';
import { useAnimationIncludingChildren } from '../common/use-animation-including-children';
import { animateIncludingChildren } from '../common/animate-including-children';

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
    transition('0 => 1', [...animateIncludingChildren('ease-in', options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    }),
    transition('1 => 0', [...animateIncludingChildren('ease-out', options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
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
    transition('0 => 1', [...animateIncludingChildren('ease-in', options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    }),
    transition('1 => 0', [...animateIncludingChildren('ease-out', options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
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
    transition(':enter', animation([style({ visibility: 'hidden' }), ...useAnimationIncludingChildren(expand(), options)]), {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}

export function expandRightOnEnterAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'expandRightOnEnter', [
    transition(':enter', animation([style({ visibility: 'hidden' }), ...useAnimationIncludingChildren(expandRight(), options)]), {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}

export function collapseOnLeaveAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'collapseOnLeave', [
    transition(':leave', [...useAnimationIncludingChildren(collapse(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}

export function collapseLeftOnLeaveAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'collapseLeftOnLeave', [
    transition(':leave', [...useAnimationIncludingChildren(collapseLeft(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}

export function fadeInExpandOnEnterAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeInExpandOnEnter', [
    transition(':enter', animation([style({ visibility: 'hidden' }), ...useAnimationIncludingChildren(fadeInExpand(), options)]), {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}

export function fadeInExpandRightOnEnterAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeInExpandRightOnEnter', [
    transition(':enter', animation([style({ visibility: 'hidden' }), ...useAnimationIncludingChildren(fadeInExpandRight(), options)]), {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}

export function fadeOutCollapseOnLeaveAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeOutCollapseOnLeave', [
    transition(':leave', [...useAnimationIncludingChildren(fadeOutCollapse(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}

export function fadeOutCollapseLeftOnLeaveAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'fadeOutCollapseLeftOnLeave', [
    transition(':leave', [...useAnimationIncludingChildren(fadeOutCollapseLeft(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}
