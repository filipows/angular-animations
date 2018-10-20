import { Component } from '@angular/core';

import {
  bounceInOnEnterAnimation,
  bounceOutOnLeaveAnimation,
  bounceInUpOnEnterAnimation,
  bounceOutDownOnLeaveAnimation,
  bounceInDownOnEnterAnimation,
  bounceOutUpOnLeaveAnimation,
  bounceInLeftOnEnterAnimation,
  bounceInRightOnEnterAnimation,
  bounceOutLeftOnLeaveAnimation,
  bounceOutRightOnLeaveAnimation
} from '../../../../lib';

@Component({
  selector: 'app-demo-on-enter-on-leave',
  templateUrl: './demo-on-enter-on-leave.component.html',
  styleUrls: ['./demo-on-enter-on-leave.component.scss'],
  animations: [
    bounceInOnEnterAnimation(),
    bounceInUpOnEnterAnimation(),
    bounceOutOnLeaveAnimation(),
    bounceOutDownOnLeaveAnimation(),
    bounceInDownOnEnterAnimation(),
    bounceOutUpOnLeaveAnimation(),
    bounceInLeftOnEnterAnimation(),
    bounceInRightOnEnterAnimation(),
    bounceOutLeftOnLeaveAnimation(),
    bounceOutRightOnLeaveAnimation()
  
  ]
})
export class DemoOnEnterOnLeaveComponent {
  animations = [
    'bounceIn',
    'bounceInUp',
    'bounceInDown',
    'bounceInLeft',
    'bounceInRight'
  ];
  animation = this.animations[0];

  state = true;

  toggleState() {
    this.state = !this.state;
  }
}
