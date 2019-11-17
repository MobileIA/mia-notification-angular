import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { NotificationComponent } from './notification.component';
import { AuthenticationModule } from '@mobileia/authentication';
import { MiaNotificationConfig } from './entities/mia-notification-config';

@NgModule({
  declarations: [NotificationComponent],
  imports: [
    AuthenticationModule
  ],
  exports: [NotificationComponent]
})
export class NotificationModule {
  constructor(@Optional() @SkipSelf() parentModule: NotificationModule) {
    if (parentModule) {
      throw new Error(
        'NotificationModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: MiaNotificationConfig): ModuleWithProviders {
    return {
      ngModule: NotificationModule,
      providers: [
        {provide: MiaNotificationConfig, useValue: config }
      ]
    };
  }
}
