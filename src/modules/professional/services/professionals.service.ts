import { Injectable } from '@angular/core';
import { HttpService } from 'src/modules/http/http.service';

@Injectable()
export class ProfessionalService extends HttpService {
  PATH = 'professionals';

  getProfessionals() {
    return this.get();
  }
}
