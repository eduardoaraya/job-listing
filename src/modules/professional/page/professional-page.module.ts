import { NgModule } from '@angular/core';
import { ProfessionalComponentModule } from '../components/professional-components.module';
import { ProfessionalService } from '../services/professionals.service';
import { ProfessionalPage } from './professional-page.component';

@NgModule({
  imports: [ProfessionalComponentModule],
  declarations: [ProfessionalPage],
  exports: [ProfessionalPage],
  providers: [ProfessionalService],
})
export class ProfessionalPageModule {}
