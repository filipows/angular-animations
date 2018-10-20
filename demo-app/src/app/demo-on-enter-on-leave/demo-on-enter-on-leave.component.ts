import { Component } from '@angular/core';

import { bounceInOnEnterAnimation, bounceOutOnLeaveAnimation } from '../../../../lib';

@Component({
  selector: 'app-demo-on-enter-on-leave',
  templateUrl: './demo-on-enter-on-leave.component.html',
  styleUrls: ['./demo-on-enter-on-leave.component.scss'],
  animations: [
    bounceInOnEnterAnimation(),
    bounceOutOnLeaveAnimation()
  ]
})
export class DemoOnEnterOnLeaveComponent {
  animations = [
    'bounceInOut',
  ];
  animation = this.animations[0];

  state = true;

  constructor() { }

  toggleState() {
    this.state = !this.state;
  }
}
