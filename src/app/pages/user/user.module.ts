import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { UserService } from 'app/services/user.service';
import { TaskService } from 'app/services/task.service';
import { DashService } from 'app/services/dash.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { UserComponent } from './user.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    NbCardModule,
    ThemeModule,

  ],
  declarations: [
    UserComponent,
  ],
  providers: [UserService],

})
export class UserModule { }
