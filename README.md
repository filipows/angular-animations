# angular-animations

Angular Animations utility library for Angular 4.2+

## Getting started

Install package and dependencies
```bash
 npm i angular-animations --save

 npm i @angular/animations@latest --save
 ```

 Import "BrowserAnimationsModule" from "@angular/platform-browser/animations" in your root NgModule 

 ```ts
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
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