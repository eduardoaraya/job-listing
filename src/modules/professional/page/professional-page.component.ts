import { Component, OnInit } from '@angular/core';
import { ProfessionalService } from '../services/professionals.service';

@Component({
  selector: 'app-professional-page',
  templateUrl: './professional-page.html',
  styleUrls: ['./professional-page.less'],
})
export class ProfessionalPage implements OnInit {
  constructor(private professionalService: ProfessionalService) {}

  ngOnInit() {
    this.professionalService
      .getProfessionals()
      .subscribe((res) => console.log(res));
  }
}
