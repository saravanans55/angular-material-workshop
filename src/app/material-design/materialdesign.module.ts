import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDatepickerModule } from "@angular/material/datepicker";
import {  MatDialogModule } from "@angular/material/dialog";
import {  MatInputModule } from "@angular/material/input";
import {  MatListModule } from "@angular/material/list";
import {  MatNavList } from "@angular/material/list";
import {  MatPaginatorModule } from "@angular/material/paginator";
import {  MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {  MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import {  MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import {HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatStepperModule} from '@angular/material/stepper';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule} from '@angular/material/radio';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { MatSliderModule} from '@angular/material/slider';
import { MatTooltipModule} from '@angular/material/tooltip';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatTreeModule} from '@angular/material/tree';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BadgeComponent } from './badge/badge.component';
import { MatBadgeModule} from '@angular/material/badge';
import { ButtonSheetComponent } from './button-sheet/button-sheet.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { CoreComponent } from './core/core.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DialogComponent } from './dialog/dialog.component';
import { DividerComponent } from './divider/divider.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { RipplesComponent } from './ripples/ripples.component';
import { SelectComponent } from './select/select.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { SliderComponent } from './slider/slider.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SortHeaderComponent } from './sort-header/sort-header.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TreeComponent } from './tree/tree.component';
import { StepperComponent } from './stepper/stepper.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ButtonComponent } from './button/button.component';
import { ChecklistDatabase } from './tree/checklistdb.service';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesignLayout } from './material-design-layout/material-design-layout.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path : "autocomplete",
    component : AutocompleteComponent
  },
  {
    path : "badge",
    component : BadgeComponent
  },
  {
    path : "bottom-sheet",
    component : ButtonSheetComponent
  },
  {
    path : "button",
    component : ButtonComponent
  },
  {
    path : "button-toggle",
    component : ButtonToggleComponent
  },
  {
    path : "card",
    component : CardComponent
  },
  {
    path : "checkbox",
    component : CheckboxComponent
  },
  {
    path : "chips",
    component : ChipsComponent
  },
  {
    path : "core",
    component : CoreComponent
  },
  {
    path : "datepicker",
    component : DatepickerComponent
  },
  {
    path : "dialog",
    component : DialogComponent
  },
  {
    path : "divider",
    component : DividerComponent
  },
  {
    path : "expansion-panel",
    component : ExpansionPanelComponent
  },
  {
    path : "form-field",
    component : FormFieldComponent
  },
  {
    path : "grid-list",
    component : GridListComponent
  },
  {
    path : "icon",
    component : IconComponent
  },
  {
    path : "input",
    component : InputComponent
  },
  {
    path : "list",
    component : ListComponent
  },
  {
    path : "menu",
    component : MenuComponent
  },
  {
    path : "paginator",
    component : PaginatorComponent
  },
  {
    path : "progress-bar",
    component : ProgressBarComponent
  },
  {
    path : "progress-spinner",
    component : ProgressSpinnerComponent
  },
  {
    path : "radio-button",
    component : RadioButtonComponent
  },
  {
    path : "ripples",
    component : RipplesComponent
  },
  {
    path : "select",
    component : SelectComponent
  },
  {
    path : "sidenav",
    component : SidenavComponent
  },
  {
    path : "slide-toggle",
    component : SlideToggleComponent
  },
  {
    path : "slider",
    component : SliderComponent
  },
  {
    path : "snackbar",
    component : SnackbarComponent
  },
  {
    path : "sort-header",
    component : SortHeaderComponent
  },
  {
    path : "stepper",
    component : StepperComponent
  },
  {
    path : "table",
    component : TableComponent
  },
  {
    path : "tabs",
    component : TabsComponent
  },
  {
    path : "toolbar",
    component : ToolbarComponent
  },
  {
    path : "tooltip",
    component : TooltipComponent
  },
  {
    path : "tree",
    component : TreeComponent
  },
];

@NgModule({
  declarations: [
    MaterialDesignLayout,
    AutocompleteComponent,
    ButtonComponent,
    StepperComponent,
    BadgeComponent,
    ButtonSheetComponent,
    ButtonToggleComponent,
    CardComponent,
    CheckboxComponent,
    ChipsComponent,
    CoreComponent,
    DatepickerComponent,
    DialogComponent,
    DividerComponent,
    ExpansionPanelComponent,
    FormFieldComponent,
    GridListComponent,
    IconComponent,
    InputComponent,
    ListComponent,
    MenuComponent,
    PaginatorComponent,
    ProgressBarComponent,
    ProgressSpinnerComponent,
    RadioButtonComponent,
    RipplesComponent,
    SelectComponent,
    SidenavComponent,
    SlideToggleComponent,
    SliderComponent,
    SnackbarComponent,
    SortHeaderComponent,
    TableComponent,
    TabsComponent,
    ToolbarComponent,
    TooltipComponent,
    TreeComponent,
],
imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonToggleModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatExpansionModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatTooltipModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    DragDropModule,
    MatRadioModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatTreeModule,
    ScrollingModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatBottomSheetModule,
    FormsModule,
    MatChipsModule,
    MatRippleModule,
    MatSlideToggleModule
],
providers: [
  ChecklistDatabase
],
schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialDesignModule {}
