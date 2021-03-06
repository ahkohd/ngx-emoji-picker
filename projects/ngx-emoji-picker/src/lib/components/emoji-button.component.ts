import { Component, Input, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'emoji-button',
  styleUrls: ['../styles/emoji-button.scss'],
  template: `
    <button
      class="emoji-button" 
      (click)="selectionEmitter.emit(dataToEmit || emoji)" [innerHTML]="emoji[0] | emojiFallback">
    </button>
  `
})
export class EmojiButtonComponent {
  @Input('emoji') emoji
  @Input('dataToEmit') dataToEmit
  @Input('options') options
  @Input('fitzpatrick') fitzpatrick

  @Output('selection') selectionEmitter: EventEmitter<any> = new EventEmitter()

  constructor() {}

  ngOnChanges() {}
}
