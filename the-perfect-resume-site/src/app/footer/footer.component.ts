import { Component } from '@angular/core';
import { AppConstants } from '../objects/AppConstants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(){}

  BrandName=AppConstants.BRAND_NAME
}
