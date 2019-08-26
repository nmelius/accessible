import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { AccessibleFormComponent } from './accessible-form/accessible-form.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';

const appRoutes: Routes = [
  { path:'accessible-form', component: AccessibleFormComponent },
  { path:'comparison', component: ComparisonComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    AccessibleFormComponent,
    ComparisonComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RichTextEditorAllModule,
    RouterModule.forRoot(appRoutes,{
      anchorScrolling: 'enabled',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
