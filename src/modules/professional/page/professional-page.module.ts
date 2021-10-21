import { NgModule } from '@angular/core';
import { ProfessionalComponentModule } from '../components/professional-components.module';
import { ProfessionalPage } from './professional-page.component';

@NgModule({
  imports: [ProfessionalComponentModule],
  declarations: [ProfessionalPage],
  exports: [ProfessionalPage],
})
export class ProfessionalPageModule {}
