import { Directive, HostListener, Inject, LOCALE_ID, } from "@angular/core";
import { NgControl, NgModel } from "@angular/forms";
import { CurrencyPipe, DecimalPipe } from "@angular/common";

@Directive({
  selector: "[appCurrencyMask]",
  providers: [NgModel, CurrencyPipe, DecimalPipe],
  host: {
    "(blur)": "onInputChange($event)"
  }
})
export class CurrencyMaskDirective {
  constructor(
    private model: NgModel,
    private currencyPipe: CurrencyPipe,
    public ngControl: NgControl,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  onInputChange($event:any) {
    var value = $event.target.value;
    if (!value) return;

    var plainNumber: number;
    var formattedValue: string;

    var decimalSeparatorIndex = value.lastIndexOf(",");
    if (decimalSeparatorIndex > 0) {
      var wholeNumberPart = value.substring(0, decimalSeparatorIndex);
      var decimalPart = value.substr(decimalSeparatorIndex + 1);
      plainNumber = parseFloat(
        wholeNumberPart.replace(/[^\d]/g, "") + "." + decimalPart
      );
    } else {
      plainNumber = parseFloat(value.replace(/[^\d]/g, ""));
    }

    if (!plainNumber) {
      formattedValue = "";
    } else {
      formattedValue = this.currencyPipe.transform(
        plainNumber.toFixed(2),
        "Rp.", //IDR symbol-narrow doesn't have the dot
        "symbol-narrow",
        '1.2-2',
        this.locale //Supposed to change coma separator into dot but somehow doesn't work as intended
      )!;
    }

    this.ngControl.valueAccessor?.writeValue(formattedValue);
  }
}
