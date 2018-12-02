import { Component, OnInit } from '@angular/core';

import {
  rotateInDownLeftOnEnterAnimation,
  rollInAnimation,
  zoomInLeftAnimation,
  zoomInDownOnEnterAnimation,
  hueRotateAnimation,
  zoomInUpOnEnterAnimation,
  rubberBandAnimation,
  flashAnimation,
  fadeInOnEnterAnimation,
  rubberBandOnEnterAnimation
} from '../../../../lib';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.scss'],
  animations: [
    rotateInDownLeftOnEnterAnimation({ anchor: 'enter' }),
    zoomInDownOnEnterAnimation({ anchor: 'enterLetterAnim1' }),
    fadeInOnEnterAnimation({ anchor: 'enterLetterAnim2' }),
    zoomInUpOnEnterAnimation({ anchor: 'enterLetterAnim3' }),
    rollInAnimation({ anchor: 'letterAnim1' }),
    zoomInLeftAnimation({ anchor: 'letterAnim2' }),
    rubberBandAnimation({ anchor: 'letterAnim3' }),
    hueRotateAnimation({ anchor: 'hueLetter', duration: 5000 }),
    flashAnimation({ anchor: 'flash' }),
    rubberBandOnEnterAnimation({ anchor: 'btnEnter', delay: 12500 }),
    fadeInOnEnterAnimation({ anchor: 'btnEnterFadeIn', delay: 12500, duration: 500 })
  ]
})
export class ExperimentsComponent implements OnInit {
  text1 = 'This is just a first line of text...'.split('');
  text2 = 'and that is a second one...'.split('');
  text3 = 'and the last one...'.split('');

  animationState = false;
  hueState = false;
  flashState = false;

  constructor() {}

  getDelay(index, lenght) {
    if (index < lenght / 2 - 2) {
      return index * 100;
    } else {
      return lenght * 100 - index * 100;
    }
  }

  animate() {
    this.animationState = false;
    setTimeout(() => {
      this.animationState = true;
    }, 1);
  }

  ngOnInit() {}
}
