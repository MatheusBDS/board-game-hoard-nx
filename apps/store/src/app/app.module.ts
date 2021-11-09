import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreFeatureCartModule } from '@bghoard/store/feature-cart';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreFeatureCartModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('@bghoard/store/feature-list').then(
              (module) => module.StoreFeatureListModule
            ),
        },
        {
          path: '',
          loadChildren: () =>
            import('@bghoard/store/feature-details').then(
              (module) => module.StoreFeatureDetailsModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking', relativeLinkResolution: 'legacy'}
    ),
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/store',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
