[![npm version](https://badge.fury.io/js/ngx-emoji-picker.svg)](https://badge.fury.io/js/ngx-emoji-picker)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

# 😎 Ngx-emoji-picker

## 🆕 What's New

- 🐣 Fallback emojis using twemoji.
- 🛠 Fixed the [AOT (Ahead Of Time) Compile error](https://github.com/danielehrhardt/ionic3-emoji-picker/issues/8) or simply put the **---prod** build compile error.
- ⏫ Upgraded the library from a **Ng2** project to a **Ng9** project.
- ⏫ Upgraded the library **RxJs** from **v5** to **v6** to make it support new angular versions.
- ✅ Now compatible with **Ng2** - **Ng9+** projects and as well as **Ionic 3/4**.

_A fork of [ionic3-emoji-picker](https://github.com/danielehrhardt/ionic3-emoji-picker) project created by [danielehrhardt](https://github.com/danielehrhardt)_

# Installation

## Install the module via NPM

```shell
# Angular 8 downwards...
npm i ngx-emoji-picker@0.0.2

# Angular 9 upwards...
npm i ngx-emoji-picker
```

## Import it in your app's module(s)

Import `EmojiPickerModule.forRoot()` in your app's main module

app.module.ts

```ts
import  {  NgxEmojiPickerModule  }  from  'ngx-emoji-picker';

@NgModule({
    ...
    imports: [
      ...
      NgxEmojiPickerModule.forRoot()
      ],
    ...
})
export class AppModule {}
```

If your app uses lazy loading, you need to import `EmojiPickerModule` in your shared module or child modules:

```ts
import  {  NgxEmojiPickerModule  }  from  'ngx-emoji-picker';

@NgModule({
    ...
    imports: [
      ...
      NgxEmojiPickerModule
      ],
    ...
})
export class SharedModule {}
```

## Sample

### Angular Example

```html
<i
  (click)="toggled = !toggled"
  [(emojiPickerIf)]="toggled"
  [emojiPickerDirection]="'bottom' || 'top' || 'left' || 'right'"
  (emojiPickerSelect)="handleSelection($event)"
  >😄</i
>
```

```ts
toggled: boolean = false;
handleSelection(event) {
  console.log(event.char);
}
```

### Ionic 3 Example

```html
<ion-textarea [(ngModel)]="message"></ion-textarea>

<button
  ion-button
  clear
  icon-only
  (click)="toggled = !toggled"
  [(emojiPickerIf)]="toggled"
  [emojiPickerDirection]="'top'"
  (emojiPickerSelect)="handleSelection($event)"
>
  <ion-icon name="md-happy"></ion-icon>
</button>
```

```ts
toggled: boolean = false;
message: string;

handleSelection(event) {
  this.message += event.char;
}
```

### Directive API:

```html
<button
  ion-button
  (click)="toggled = !toggled"
  [(emojiPickerIf)]="toggled"
  [emojiPickerDirection]="'bottom' || 'top' || 'left' || 'right'"
  (emojiPickerSelect)="handleSelection($event)"
>
  <ion-icon name="md-happy"></ion-icon>
</button>
```

### Emitter `(emojiPickerSelect)="handleSelection($event)"`

```
$event = EmojiEvent{ char : "😌", label : "relieved" }
```

## EmojiPickerCaretEmitter

added for your convenience, emits information regarding a content editable enabled element

### Emitter `(emojiPickerCaretEmitter)="handleCaretChange($event)"`

```
$event = CaretEvent{ caretOffset: 13, caretRange: Range{...}, textContent: 'content of div or input' }
```

Emoji Picker will get placed relative the element chosen via the directive api, centered and within window borders

# Contributing

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://victor-aremu.web.app"><img src="https://avatars1.githubusercontent.com/u/13041443?v=4" width="100px;" alt=""/><br /><sub><b>Victor Aremu</b></sub></a><br /><a href="#maintenance-ahkohd" title="Maintenance">🚧</a> <a href="#projectManagement-ahkohd" title="Project Management">📆</a></td>
    <td align="center"><a href="https://github.com/GNURub"><img src="https://avatars3.githubusercontent.com/u/1318648?v=4" width="100px;" alt=""/><br /><sub><b>Rubén</b></sub></a><br /><a href="https://github.com/ahkohd/ngx-emoji-picker/commits?author=GNURub" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/cheygo"><img src="https://avatars3.githubusercontent.com/u/69327675?v=4" width="100px;" alt=""/><br /><sub><b>cheygo</b></sub></a><br /><a href="#a11y-cheygo" title="Accessibility">️️️️♿️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
