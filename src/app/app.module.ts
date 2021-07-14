import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Com1Component } from './com1/com1.component';
import { Com2Component } from './com2/com2.component';
import { Com3Component } from './com3/com3.component';
import { FormsModule } from '@angular/forms';
import { Comp4Component } from './comp4/comp4.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    Com1Component,
    Com2Component,
    Com3Component,
    Comp4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzDropDownModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
