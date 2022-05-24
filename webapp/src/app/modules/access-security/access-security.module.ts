import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PortalComponent } from './portal/portal.component';
import { ScreensComponent } from './screens/screens.component';
import { AccessSecurityPortalComponent } from './access-security-portal/access-security-portal.component';
import { AccessSecurityScreensComponent } from './access-security-screens/access-security-screens.component';
import { AccessSecurityProfileComponent } from './access-security-profile/access-security-profile.component';



@NgModule({
  declarations: [
    HomeComponent,
    PortalComponent,
    ScreensComponent,
    AccessSecurityPortalComponent,
    AccessSecurityScreensComponent,
    AccessSecurityProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccessSecurityModule { }
