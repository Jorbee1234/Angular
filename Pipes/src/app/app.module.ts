import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatusPipe } from './pipes/status.pipe';
import { StatusIcon } from './pipes/status-icon.pipe';

import localept from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

registerLocaleData(localept, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    StatusPipe,
    StatusIcon,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
