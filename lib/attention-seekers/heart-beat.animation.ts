import { animate, animation, AnimationTriggerMetadata, AUTO_STYLE, keyframes, style, transition, trigger } from '@angular/animations';

import { IAttentionSeekerAnimationOptions } from '../common/interfaces';
import { useAnimationIncludingChildren } from '../common/use-animation-including-children';

export interface IHeartBeatAnimationOptions extends IAttentionSeekerAnimationOptions {
  /**
   * Scale factor
   *
   * Default: 1.3
   */
  scale?: number;
}

const heartBeat = () =>
  animation([
    animate(
      '{{duration}}ms {{delay}}ms',
      keyframes([
        style({ visibility: AUTO_STYLE, transform: 'scale(1)', easing: 'ease-in-out', offset: 0 }),
        style({ transform: 'scale({{scale}})', easing: 'ease-in-out', offset: 0.14 }),
        style({ transform: 'scale(1)', easing: 'ease-in-out', offset: 0.28 }),
        style({ transform: 'scale({{scale}})', easing: 'ease-in-out', offset: 0.42 }),
        style({ transform: 'scale(1)', easing: 'ease-in-out', offset: 0.7 })
      ])
    )
  ]);

const DEFAULT_DURATION = 1300;
const DEFAULT_SCALE = 1.3;

export function heartBeatAnimation(options?: IHeartBeatAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'heartBeat', [
    transition(`0 ${(options && options.direction) || '<=>'} 1`, [...useAnimationIncludingChildren(heartBeat(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        scale: (options && options.scale) || DEFAULT_SCALE
      }
    })
  ]);
}

export function heartBeatOnEnterAnimation(options?: IHeartBeatAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'heartBeatOnEnter', [
    transition(':enter', [style({ visibility: 'hidden' }), ...useAnimationIncludingChildren(heartBeat(), options)], {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION,
        scale: (options && options.scale) || DEFAULT_SCALE
      }
    })
  ]);
}
