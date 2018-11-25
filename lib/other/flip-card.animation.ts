import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';

const DEFAULT_DURATION = 1000;

export function flipCardFrontAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'flipCardFront', [
    state(
      '0',
      style({
        'transform-style': 'preserve-3d',
        position: 'absolute',
        top: 0,
        left: 0,
        transform: 'rotateY(0)',
        opacity: 1,
        'backface-visibility': 'hidden',
        width: '100%',
        height: '100%'
      })
    ),
    state(
      '1',
      style({
        'transform-style': 'preserve-3d',
        position: 'absolute',
        top: 0,
        left: 0,
        transform: 'rotateY(179deg)',
        opacity: 0,
        'backface-visibility': 'hidden',
        width: '100%',
        height: '100%'
      })
    ),
    transition('0 <=> 1', animate('{{duration}}' + 'ms ' + '{{delay}}' + 'ms ' + 'ease'), {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}

export function flipCardBackAnimation(options?: IAnimationOptions): AnimationTriggerMetadata {
  return trigger((options && options.anchor) || 'flipCardBack', [
    state(
      '0',
      style({
        'transform-style': 'preserve-3d',
        position: 'absolute',
        top: 0,
        left: 0,
        transform: 'rotateY(-179deg)',
        opacity: 0,
        'backface-visibility': 'hidden',
        width: '100%',
        height: '100%'
      })
    ),
    state(
      '1',
      style({
        'transform-style': 'preserve-3d',
        position: 'absolute',
        top: 0,
        left: 0,
        transform: 'rotateY(0)',
        opacity: 1,
        'backface-visibility': 'hidden',
        width: '100%',
        height: '100%'
      })
    ),
    transition('0 <=> 1', animate('{{duration}}' + 'ms ' + '{{delay}}' + 'ms ' + 'ease'), {
      params: {
        delay: (options && options.delay) || 0,
        duration: (options && options.duration) || DEFAULT_DURATION
      }
    })
  ]);
}
