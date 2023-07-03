import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ButtonSheetComponent } from './button-sheet.component';

@Component({
  selector :  "app-bottom-sheet-overview",
  templateUrl : "./bottom-sheet-overview.component.html",
  styleUrls : []
})
export class AppBottomSheetOverview{

  constructor(private _bottomSheetRef: MatBottomSheetRef<ButtonSheetComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
