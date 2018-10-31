# Angular-Animations Utility Library

[![npm version](https://badge.fury.io/js/angular-animations.svg)](https://www.npmjs.com/package/angular-animations)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

Easy, Reusable Animation Utility library for Angular Apps.

Angular Animations utility library is a collection of reusable and parametrized animations build for Angular 4.4.6+ that can be used in a declarative manner. It implements all animations from [animate.css](https://daneden.github.io/animate.css/) (and more).

### Quick links

[Demo](https://filipows.github.io/angular-animations/) |
[StackBlitz Template](https://stackblitz.com/edit/angular-animations-lib-demo)

## Getting Started

### Prerequisites

Make sure you import `BrowserAnimationModule` in your angular app.

```bash
 npm i @angular/animations@latest --save
```

Import `BrowserAnimationsModule` from `@angular/platform-browser/animations` in your root NgModule

```ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
```

```ts
@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    BrowserAnimationsModule
  ],
})
export class AppModule { }
```

## Installation

```bash
 npm i angular-animations --save
```

## Usage

### Animations `on enter` / `on leave`

Animations on enter / on leave are triggered in a moment when element is added to or removed from the dom.
Basic example would be with `*ngIf` template directive.

Import animation functions that you want to use and add them to `animations` in a component decorator:

```ts
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: '...',
  templateUrl: '...',
  styleUrls: ['...'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
  ]
})
```

and use them in the template:

```html
<div  *ngIf="CONDITION"  [@fadeInOnEnter] [@fadeOutOnLeave]></div>
```

### Animations with state or triggered by state changes

These animations take as an input a boolean value. Some of animations, like Attention Seekers are triggered by any changes of the state, but others like `collapse` or `rotate` animations are displaying default state when the value is `falsy` and transition to end state when the value is `truthy`

```ts
import { collapseAnimation, rubberBandAnimation } from 'angular-animations';

@Component({
  ...
  animations: [
    rubberBandAnimation(),
    collapseAnimation(),
  ]
})
```

```html
<div  [@rubberBand]="rubberState"></div>
<div  [@collapse]="collapseState"></div>
```

### Parametrized animations

All animations are open for customizations. All of them have parameters: `duration` and `delay`, and if it make sense for an animation, additional ones: `translate`, `degrees` or `scale`.

Parameters can be used either in a component decorator or dynamically in a template.

In a decorator:

```ts
@Component({
  ...
  animations: [
    fadeInUpOnEnterAnimation({ anchor: 'enter', duration: 1000, delay: 100, translate: '30px' }),
    bounceOutDownOnLeaveAnimation({ anchor: 'leave', duration: 500, delay: 200, translate: '40px' })
  ]
})
```

```html
<div  *ngIf="CONDITION"  [@enter] [@leave]></div>
```

In a template (providing option for dynamic changes):

```ts
@Component({
  ...
  animations: [
    fadeInUpOnEnterAnimation({ anchor: 'enter'),
  ]
})
```

```html
<div  *ngIf="CONDITION"  [@enter]="{ value: '', params: { duration: 300, delay: 0, translate: '30px' } }" [@leave]></div>
<div  *ngIf="CONDITION"  [@enter]="{ value: '', params: { duration: 300, delay: 100, translate: '40px } }" [@leave]></div>
```

With parameters in a template, we can for ex achieve staggering animations:

```html
<div  *ngFor="let i of [1,2,3]"  [@enter]="{ value: '', params: { delay: i * 100 } }"></div>
```

## Running Demo App

```
npm start
```

## Authors

- **Chris Filipowski** - [filipows](https://github.com/filipows)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
