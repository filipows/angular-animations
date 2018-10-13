import { Component } from '@angular/core';

import {
  bounceAnimation,
  flashAnimation,
  pulseAnimation,
  rubberBandAnimation,
  shakeAnimation,
  swingAnimation,
  tadaAnimation,
  wobbleAnimation,
  jelloAnimation
} from '../../../lib/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    bounceAnimation(),
    flashAnimation(),
    pulseAnimation({ anchor: 'pulse' }),
    rubberBandAnimation(),
    shakeAnimation(),
    swingAnimation(),
    tadaAnimation(),
    wobbleAnimation(),
    jelloAnimation()
  ]
})
export class AppComponent {
  animations = [
    'bounce',
    'flash',
    'pulse',
    'rubberBand',
    'shake',
    'swing',
    'tada',
    'wobble',
    'jello'
  ];
  animation = this.animations[0];
  animationState = false;

  animate() {
    console.log('animating');
    this.animationState = !this.animationState;
  }

  animateAfterChange() {
    setTimeout(() => {
      this.animate();
    }, 1);
  }
}
