import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AppBottomSheetOverview } from './bottom-sheet-overview.component';

@Component({
  selector: 'app-button-sheet',
  templateUrl: './button-sheet.component.html',
  styleUrls: ['./button-sheet.component.scss']
})
export class ButtonSheetComponent {

  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(AppBottomSheetOverview);
  }
}
