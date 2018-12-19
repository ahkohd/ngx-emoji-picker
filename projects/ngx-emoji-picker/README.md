
[![npm version](https://badge.fury.io/js/ngx-emoji-picker.svg)](https://badge.fury.io/js/ngx-emoji-picker)

# Ngx-Emoji-Picker
This project was forked from the [ionic3-emoji-picker](https://github.com/danielehrhardt/ionic3-emoji-picker) project created by [danielehrhardt](https://github.com/danielehrhardt)

## What's New
 - Fixed the [AOT (Ahead Of Time) Compile error](https://github.com/danielehrhardt/ionic3-emoji-picker/issues/8) or simply put the **---prod** build compile error.
 - Upgraded the library from a **Ng2** project to a **Ng7** project.
 - Upgraded the library **RxJs** from **v5**  to **v6** to make it support new angular versions.
 - Now compatible with **Ng2** - **Ng7** projects and as well as **Ionic 3/4**.
 

# Installation

## Install the module via NPM

```shell
npm i ngx-emoji-picker --save
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
    (emojiPickerSelect)="handleSelection($event)">😄</i>
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

<button ion-button clear icon-only (click)="toggled = !toggled" [(emojiPickerIf)]="toggled" [emojiPickerDirection]="'top'"
  (emojiPickerSelect)="handleSelection($event)">
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
<button ion-button
    (click)="toggled = !toggled"
    [(emojiPickerIf)]="toggled"
    [emojiPickerDirection]="'bottom' || 'top' || 'left' || 'right'"
    (emojiPickerSelect)="handleSelection($event)">
      <ion-icon name="md-happy"></ion-icon>
    </button>
```

### Emitter `(emojiPickerSelect)="handleSelection($event)"`

```
$event = EmojiEvent{ char : "😌", label : "relieved" }
```

## EmojiPickerCaretEmitter

added for your convenience, emits information regarding a contenteditable enabled element

### Emitter `(emojiPickerCaretEmitter)="handleCaretChange($event)"`

```
$event = CaretEvent{ caretOffset: 13, caretRange: Range{...}, textContent: 'content of div or input' }
```

Emoji Picker will get placed relative the element chosen via the directive api, centered and within window borders
