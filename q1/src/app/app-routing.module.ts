import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataDisplayComponent } from './data-display/data-display.component';
import { ArrayDisplayComponent } from './array-display/array-display.component';
import { ComboDisplayComponent } from './combo-display/combo-display.component';
import { TextInputComponent } from './text-input/text-input.component';
import { UserInputFormComponent } from './user-input-form/user-input-form.component';

const routes: Routes = [
  { path: 'data', component: DataDisplayComponent },
  { path: 'array', component: ArrayDisplayComponent },
  { path: 'combo', component: ComboDisplayComponent },
  { path: 'text', component: TextInputComponent },
  { path: 'user', component: UserInputFormComponent },
  { path: '', redirectTo: '/data', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
