import { animate, animation, keyframes, style } from '@angular/animations';

export const bounceInOpacity = animation([
  animate(
    '{{duration}}ms',
    keyframes([
      style({opacity: 0, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0  }),
      style({opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6  }),
      style({opacity: 1, easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1  }),
    ])
  )
]);
