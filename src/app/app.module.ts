import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeModule } from './components/tree/tree.module';
import { HttpService } from './service/http.service';
import { HttpProdService } from './service/http-prod.service';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TreeModule],
  providers: [
    {
      provide: HttpService,
      useFactory: (depsHttp) => new HttpProdService(depsHttp),
      deps: [HttpClient],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
