import { animateChild, AnimationTriggerMetadata, query, transition, trigger } from '@angular/animations';

interface IAnimateChildrenOnLeaveOptions {
  /**
   * Name of the animation anchor that will be used in a template
   *
   * Default: animateChildrenOnLeave
   */
  anchor?: string;
}

export function animateChildrenOnLeaveAnimation(options?: IAnimateChildrenOnLeaveOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'animateChildrenOnLeave', [
    transition(':leave', [query('@*', animateChild(), { optional: true })])
  ]);
}
