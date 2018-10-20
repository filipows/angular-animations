# Angular-Animations

Angular Animations utility library for Angular 4.2+
It is based on [animate.css](https://daneden.github.io/animate.css/), but can be used in a declarative manner with an angular app

## Prerequisites

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

## Installation and Usage

```bash
 npm i angular-animations --save
```

### Animations on enter / on leave

Animations on enter / on leave are triggered in a moment when element is added to or removed from the dom.
Basic example would be with using `*ngIf` template directive.

Import animation functions that you want to use and add them to the component `animations` declaration:

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

## Running Demo App

```
npm start
```

## Authors

- **Chris Filipowski** - [filipows](https://github.com/filipows)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
