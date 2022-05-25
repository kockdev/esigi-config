import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AccessSecurityPortalComponent } from './access-security-portal/access-security-portal.component';
import { AccessSecurityScreensComponent } from './access-security-screens/access-security-screens.component';
import { AccessSecurityProfileComponent } from './access-security-profile/access-security-profile.component';
import { AccessSecurityModuleRegisterComponent } from './access-security-module-register/access-security-module-register.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

const routes: Routes = [
  {
    path: 'portal',
    component: AccessSecurityPortalComponent,
  },
  {
    path: 'module',
    component: AccessSecurityModuleRegisterComponent,
  },
  {
    path: 'tela',
    component: AccessSecurityScreensComponent,
  },
  {
    path: 'perfil',
    component: AccessSecurityProfileComponent,
  },
];

@NgModule({
  declarations: [
    AccessSecurityPortalComponent,
    AccessSecurityScreensComponent,
    AccessSecurityProfileComponent,
    AccessSecurityModuleRegisterComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatIcon,
    FlexLayoutModule,
    MatCheckboxModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    RouterModule,
  ],
  entryComponents: [
    AccessSecurityPortalComponent,
    AccessSecurityModuleRegisterComponent,
  ],
})
export class AccessSecurityModule { }
