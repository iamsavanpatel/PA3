import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { ArrayDisplayComponent } from './array-display/array-display.component';
import { ComboDisplayComponent } from './combo-display/combo-display.component';
import { TextInputComponent } from './text-input/text-input.component';
import { UserInputFormComponent } from './user-input-form/user-input-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DataDisplayComponent,
    ArrayDisplayComponent,
    ComboDisplayComponent,
    TextInputComponent,
    UserInputFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
