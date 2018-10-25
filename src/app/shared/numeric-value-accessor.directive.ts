import { Directive, ElementRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: 'input[type=fnumber]', //matInput
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumericValueAccessorDirective,
    multi: true
  }]
})
export class NumericValueAccessorDirective implements ControlValueAccessor {

  _onChange: Function = (c:any) => {};
  _onTouched: Function = () => {};

  constructor(private _elementRef: ElementRef<HTMLInputElement>) {
  }

  writeValue(obj: any): void {
    this._elementRef.nativeElement.value = "EUR " + obj;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  @HostListener('change', ['$event'])
  onChange($event) {
    let value = $event.target.value;
    value = value.replace('EUR ', '');
    this._onChange(parseInt(value));
  }

  @HostListener('keydown', ['$event'])
  onKeydown($event) {
    console.debug('event', $event);
    if ($event.code.startsWith('Digit') && !$event.shiftKey && !$event.altKey ) return true;
    if ($event.code.startsWith('Backspace')) return true;
    if ($event.code.startsWith('Tab')) return true;
    return false;
  }


}
