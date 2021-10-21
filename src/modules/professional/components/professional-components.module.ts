import { NgModule } from '@angular/core';
import { ProfessionalCardComponent } from './professional-card/professional-card.component';
import { ProfessionalImageComponent } from './professional-image/professional-image.component';
import { ProfessionalListingComponent } from './professional-listing/professional-listing.component';

@NgModule({
  declarations: [
    ProfessionalCardComponent,
    ProfessionalImageComponent,
    ProfessionalListingComponent,
  ],
  exports: [
    ProfessionalCardComponent,
    ProfessionalImageComponent,
    ProfessionalListingComponent,
  ],
})
export class ProfessionalComponentModule {}
