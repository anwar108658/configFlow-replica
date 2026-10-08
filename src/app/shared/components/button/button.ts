import { Directive, input } from '@angular/core';

@Directive({
  selector: 'button[z-button]',
  host: {
    class: 'z-button',
    '[class.z-button-secondary]': "variant() === 'secondary'",
    '[class.z-button-ghost]': "variant() === 'ghost'",
  },
})
export class ZardButton {
  readonly variant = input<'primary' | 'secondary' | 'ghost'>('primary');
}